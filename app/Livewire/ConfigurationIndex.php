<?php

namespace App\Livewire;

use Livewire\Component;
use App\Models\Configuration;
use App\Models\Category;
use Livewire\WithPagination;

class ConfigurationIndex extends Component
{
    use WithPagination;

    public $search = '';
    public $version = null;
    public $language = null;
    public $selectedCategories = [];

    protected $queryString = [
        'search' => ['except' => ''],
        'version' => ['except' => null],
        'language' => ['except' => null],
        'selectedCategories' => ['except' => []],
    ];

    public function updatedSearch()
    {
        $this->resetPage();
    }

    public function updatedVersion()
    {
        $this->resetPage();
    }

    public function updatedLanguage()
    {
        $this->resetPage();
    }

    public function updatedSelectedCategories()
    {
        $this->resetPage();
    }

    public function clearFilters()
    {
        $this->search = '';
        $this->version = null;
        $this->language = null;
        $this->selectedCategories = [];
        $this->resetPage();
    }

    public function render()
    {
        $query = Configuration::query()
            ->with(['user', 'categories']);

        if ($this->search) {
            $query->where(function ($q) {
                $q->where('title', 'like', '%' . $this->search . '%')
                  ->orWhere('description', 'like', '%' . $this->search . '%');
            });
        }

        if ($this->version) {
            $query->where('version', $this->version);
        }

        if ($this->language) {
            $query->where('language', $this->language);
        }

        if (!empty($this->selectedCategories)) {
            $query->whereHas('categories', function ($q) {
                $q->whereIn('categories.id', $this->selectedCategories);
            });
        }

        $configurations = $query->latest()->paginate(12);
        $categories = Category::all();

        return view('livewire.configuration-index', compact('configurations', 'categories'));
    }
}
