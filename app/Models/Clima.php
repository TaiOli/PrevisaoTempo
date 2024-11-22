<?php

namespace App\Models;

use Illuminate\Support\Facades\Http;

class Clima
{
    // Chave da API OpenWeather
    const CHAVE_API_OPENWEATHER = '6b58addbe33c6d54f6ecc8abbddadf60';

    public static function getDadosClima($cidade)
    {
        // Se a cidade for um ID
        if (is_numeric($cidade)) {
            
            $url = 'https://api.openweathermap.org/data/2.5/weather?id=' . $cidade . '&appid=' . self::CHAVE_API_OPENWEATHER . '&units=metric&lang=pt';
            return Http::get($url);
        }

        // Se a cidade for pelo nome
        $url = 'https://api.openweathermap.org/data/2.5/weather?q=' . urlencode($cidade) . '&appid=' . self::CHAVE_API_OPENWEATHER . '&units=metric&lang=pt';
        return Http::get($url);
    }

    public static function FormatarDadosClima($data, $cidade)
    {
        if (isset($data['main']['temp'], $data['weather'][0]['description'], $data['main']['humidity'], $data['wind']['speed'])) {

            // Multiplica por 100 para obter em porcentagem a chuva
            $popChuva = isset($data['pop']) ? round($data['pop'] * 100) : 0;

            return [
                'cidade' => $cidade,
                'temperatura' => $data['main']['temp'],
                'descricao' => $data['weather'][0]['description'],
                'umidadeRelativa' => $data['main']['humidity'],
                'velocidadeVento' => $data['wind']['speed'],
                'chuva' => $popChuva,
            ];
        }

        return [
            'error' => 'Não foi possível obter todos os dados de clima para a cidade.'
        ];
    }
}