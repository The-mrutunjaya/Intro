import React from 'react';
import { Brain, Search, BookOpen, Settings, Database, BarChart3 } from 'lucide-react';

const MainApp: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Brain className="w-8 h-8 text-black" />
              <div>
                <h1 className="text-xl font-light text-black">
                  Dr.<span className="font-semibold">Researcher</span>
                </h1>
                <p className="text-xs text-gray-500 font-mono">v3.2</p>
              </div>
            </div>
            
            <nav className="flex items-center gap-6">
              <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-black transition-colors">
                <Search className="w-4 h-4" />
                Search
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-black transition-colors">
                <Database className="w-4 h-4" />
                Database
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-black transition-colors">
                <BarChart3 className="w-4 h-4" />
                Analytics
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-black transition-colors">
                <Settings className="w-4 h-4" />
                Settings
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-gray-900 mb-4">
            Welcome to <span className="font-semibold">Dr.Researcher</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Advanced research platform powered by artificial intelligence. 
            Discover, analyze, and synthesize knowledge like never before.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 transition-colors">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <Search className="w-6 h-6 text-gray-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Search</h3>
            <p className="text-gray-600">
              Intelligent search across millions of research papers and academic resources.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 transition-colors">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-gray-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Knowledge Base</h3>
            <p className="text-gray-600">
              Curated collection of research findings and academic insights.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 transition-colors">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-gray-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Analytics</h3>
            <p className="text-gray-600">
              Advanced analytics and visualization tools for research data.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium">
            Start Researching
          </button>
        </div>
      </main>
    </div>
  );
};

export default MainApp;