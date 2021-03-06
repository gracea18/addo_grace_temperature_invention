
while True:
    print("Temperature:" + input.temperature(TemperatureUnit.FAHRENHEIT))
    
    if input.temperature(TemperatureUnit.FAHRENHEIT) > 74:
        light.clear()
        light.set_brightness(255)
        light.set_all(light.rgb(255,0,0))
        light.clear()
        light.set_all(light.rgb(255,0,0))
        
    elif input.temperature(TemperatureUnit.FAHRENHEIT) < 68:
        light.clear()
        light.set_brightness(255)
        light.set_all(light.rgb(0,0,255))
        light.clear()
        light.set_all(light.rgb(0,0,255))
       
    else:
        light.set_brightness(100)
        light.set_pixel_color(0, light.rgb(255,128,0))
        light.set_pixel_color(1, light.rgb(255,255,0))
        light.set_pixel_color(2, light.rgb(0,255,0))
        light.set_pixel_color(3, light.rgb(0,255,128))
        light.set_pixel_color(4, light.rgb(0,255,255))
        light.set_pixel_color(5, light.rgb(0,128,255))
        light.set_pixel_color(6, light.rgb(0,0,255))
        light.set_pixel_color(7, light.rgb(128,0,255))
        light.set_pixel_color(8, light.rgb(255,0,128))
        light.set_pixel_color(9, light.rgb(255,0,0))
        