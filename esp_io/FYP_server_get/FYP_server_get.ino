
#include <Arduino.h>

#include <WiFi.h>
#include <WiFiMulti.h>
#include <WiFiClientSecure.h>
#include <HTTPClient.h>


#define USE_SERIAL Serial


WiFiMulti WiFiMulti;


// CONST VARIABLES

const char* ssid = "dont use";
const char* password =  "xj681227";
const char* IP = "10.206.199.148";
const int serverPort = 4000;
const char* addr = "http://192.168.56.132:4000/data";

void SetPins(const String& response) {
  // Define the GPIO pins you want to control
  const int pinCount = 16;
  int pins[pinCount] = {2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18};

  // Iterate through each character in the response string
  for (int i = 0; i < response.length(); i++) {
    // Convert the character to an integer
    int pinState = response.charAt(i) - '0';

    // Set the voltage level of the corresponding pin
    digitalWrite(pins[i], pinState);
  }
}


void setup(){
    USE_SERIAL.begin(9600);

    USE_SERIAL.setDebugOutput(true);


    USE_SERIAL.printf("[SETUP] BOOT WAIT %d...\n", 1);



    // Connect to WIFI
    WiFiMulti.addAP(ssid, password);

    while (WiFiMulti.run() != WL_CONNECTED){
        delay(100);
        USE_SERIAL.println(WiFiMulti.run());

    }
    USE_SERIAL.println();
    USE_SERIAL.println("WiFi connected!");
    USE_SERIAL.print("IP address: ");
    USE_SERIAL.println(WiFi.localIP());


}


void loop(){
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;

    // Send GET request to /data route
    http.begin(addr);
    int httpCode = http.GET();

    if (httpCode > 0) {
      if (httpCode == HTTP_CODE_OK) {
        String response = http.getString();
        Serial.println(response);
        SetPins(response);
      }
    } else {
      Serial.println("Failed to connect to server");
    }

    http.end();
    delay (1000);
  }


}