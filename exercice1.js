function temperatureEau(temperature)
{
    if(temperature >= 1 && temperature < 100)
    {
        return "liquide";

    }else if(temperature < 1 || temperature == 0)
    {
        return "glace";
    }else{
        return "vapeur"
    }
}
