while (true) {
    console.log("Temperature:" + input.temperature(TemperatureUnit.Fahrenheit))
    if (input.temperature(TemperatureUnit.Fahrenheit) > 68 && input.temperature(TemperatureUnit.Fahrenheit) < 74) {
        light.setBrightness(100)
        light.setPixelColor(0, light.rgb(255, 128, 0))
        light.setPixelColor(1, light.rgb(255, 255, 0))
        light.setPixelColor(2, light.rgb(0, 255, 0))
        light.setPixelColor(3, light.rgb(0, 255, 128))
        light.setPixelColor(4, light.rgb(0, 255, 255))
        light.setPixelColor(5, light.rgb(0, 128, 255))
        light.setPixelColor(6, light.rgb(0, 0, 255))
        light.setPixelColor(7, light.rgb(128, 0, 255))
        light.setPixelColor(8, light.rgb(255, 0, 128))
        light.setPixelColor(9, light.rgb(255, 0, 0))
    } else if (input.temperature(TemperatureUnit.Fahrenheit) > 74) {
        light.clear()
        light.setBrightness(255)
        light.setAll(light.rgb(255, 0, 0))
        light.clear()
        light.setAll(light.rgb(255, 0, 0))
        light.clear()
        light.setAll(light.rgb(255, 0, 0))
    } else if (input.temperature(TemperatureUnit.Fahrenheit) < 68) {
        light.clear()
        light.setBrightness(255)
        light.setAll(light.rgb(0, 0, 255))
        light.clear()
        light.setAll(light.rgb(0, 0, 255))
        light.clear()
        light.setAll(light.rgb(0, 0, 255))
    }
    
}
