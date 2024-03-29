<?php

namespace App\Http\Requests;

use App\Models\Configuration;
use Illuminate\Foundation\Http\FormRequest;

class StoreConfigurationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => 'required|max:255',
            'description' => 'nullable',
            'code' => 'required',
            'version' => 'required|in:'.collect(Configuration::versions())->join(','),
            'category_id' => 'required|exists:categories,id',
            'language' => 'required|in:fr,de,en',
            'is_public' => 'required|boolean',
        ];
    }
}
