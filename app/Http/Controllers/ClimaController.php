<?php

namespace App\Http\Controllers;

use App\Models\Clima;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ClimaController extends Controller
{
    public function getClima(Request $request)
    {
        $validated = $this->validateCidade($request);

        if ($validated->fails()) {
            return response()->json(['error' => $validated->errors()->first()]);
        }

        $cidade = $validated->validated()['cidade'];

        $response = Clima::getDadosClima($cidade);

        if ($response->successful()) {
           
            return response()->json(Clima::FormatarDadosClima($response->json(), $cidade));
        
        } else {

            return $this->tratarErroApi($response);
        }
    }

    private function validateCidade(Request $request)
    {
        return Validator::make($request->all(), [
            'cidade' => 'required|string|max:255',
        ]);
    }

    // Tratando os erros
    private function tratarErroApi($response)
    {
        $status = $response->status();
        $errorResponse = $response->json();

        if ($status == 404) {
            return response()->json(['error' => 'Cidade não encontrada. Verifique o nome e tente novamente.'], 404);
        }

        if ($status == 401) {
            return response()->json(['error' => 'Chave de API inválida. Verifique sua chave e tente novamente.'], 401);
        }

        if (isset($errorResponse['message'])) {
            return response()->json(['error' => $errorResponse['message']], $status);
        }

        return response()->json(['error' => 'Não foi possível obter os dados do clima.'], $status);
    }
}
