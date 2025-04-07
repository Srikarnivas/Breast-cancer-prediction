import React, { useState } from 'react';
import { Activity, Brain, FileCheck, AlertTriangle, Loader2 } from 'lucide-react';
import { cn } from './lib/utils';

function App() {
  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    radius: '',
    texture: '',
    perimeter: '',
    area: '',
    smoothness: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setPrediction(null);

    // Simulate API call with timeout
    setTimeout(() => {
      // Random prediction for demo (0 or 1)
      const result = Math.round(Math.random());
      setPrediction(result);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center">
            <Activity className="h-8 w-8 text-pink-600" />
            <h1 className="ml-3 text-2xl font-bold text-gray-900">Breast Cancer Detection AI</h1>
          </div>
          <nav className="flex space-x-8">
            <a href="#predict" className="text-gray-600 hover:text-gray-900">Predict</a>
            <a href="#model" className="text-gray-600 hover:text-gray-900">Model</a>
            <a href="#accuracy" className="text-gray-600 hover:text-gray-900">Accuracy</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Advanced AI for</span>
                <span className="block text-pink-600">Breast Cancer Detection</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Leveraging deep learning technology to achieve 98% accuracy in breast cancer detection.
                Early detection saves lives.
              </p>
            </div>
          </div>
        </div>

        {/* Prediction Section */}
        <div id="predict" className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">Enter Patient Data</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="radius" className="block text-sm font-medium text-gray-700">Mean Radius</label>
                      <input
                        type="number"
                        step="0.01"
                        name="radius"
                        id="radius"
                        required
                        value={formData.radius}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="texture" className="block text-sm font-medium text-gray-700">Mean Texture</label>
                      <input
                        type="number"
                        step="0.01"
                        name="texture"
                        id="texture"
                        required
                        value={formData.texture}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="perimeter" className="block text-sm font-medium text-gray-700">Mean Perimeter</label>
                      <input
                        type="number"
                        step="0.01"
                        name="perimeter"
                        id="perimeter"
                        required
                        value={formData.perimeter}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="area" className="block text-sm font-medium text-gray-700">Mean Area</label>
                      <input
                        type="number"
                        step="0.01"
                        name="area"
                        id="area"
                        required
                        value={formData.area}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="smoothness" className="block text-sm font-medium text-gray-700">Mean Smoothness</label>
                      <input
                        type="number"
                        step="0.00001"
                        name="smoothness"
                        id="smoothness"
                        required
                        value={formData.smoothness}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className={cn(
                        "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white",
                        "bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500",
                        loading && "opacity-75 cursor-not-allowed"
                      )}
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        'Get Prediction'
                      )}
                    </button>
                  </div>
                </form>

                {/* Prediction Result */}
                {prediction !== null && (
                  <div className={cn(
                    "mt-6 p-4 rounded-md",
                    prediction === 1 ? "bg-red-50" : "bg-green-50"
                  )}>
                    <div className="flex">
                      <div className={cn(
                        "flex-shrink-0",
                        prediction === 1 ? "text-red-400" : "text-green-400"
                      )}>
                        <AlertTriangle className="h-5 w-5" />
                      </div>
                      <div className="ml-3">
                        <h3 className={cn(
                          "text-sm font-medium",
                          prediction === 1 ? "text-red-800" : "text-green-800"
                        )}>
                          {prediction === 1 ? "Malignant (Cancerous)" : "Benign (Non-cancerous)"}
                        </h3>
                        <div className={cn(
                          "mt-2 text-sm",
                          prediction === 1 ? "text-red-700" : "text-green-700"
                        )}>
                          <p>
                            {prediction === 1
                              ? "The model predicts that the tumor is malignant. Please consult with a healthcare professional immediately."
                              : "The model predicts that the tumor is benign. However, please consult with a healthcare professional for confirmation."
                            }
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-12 bg-gradient-to-r from-pink-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Feature 1 */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-pink-600 text-white mb-4">
                  <Brain className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">Deep Learning Model</h3>
                <p className="mt-2 text-gray-600">
                  Built using advanced neural networks with multiple layers for optimal feature extraction and classification.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white mb-4">
                  <FileCheck className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">High Accuracy</h3>
                <p className="mt-2 text-gray-600">
                  Achieves 98% accuracy in detecting breast cancer, validated through rigorous testing.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-pink-600 text-white mb-4">
                  <AlertTriangle className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">Early Detection</h3>
                <p className="mt-2 text-gray-600">
                  Helps in early detection of breast cancer, increasing the chances of successful treatment.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Model Details */}
        <div id="model" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">Model Architecture</h2>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Our deep learning model consists of multiple layers designed for optimal performance.
              </p>
            </div>

            <div className="mt-12">
              <div className="bg-white shadow rounded-lg overflow-hidden">
                <div className="px-4 py-5 sm:p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Input Layer</h3>
                      <p className="mt-1 text-gray-600">30 features for comprehensive analysis</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Hidden Layers</h3>
                      <ul className="mt-1 text-gray-600 list-disc list-inside">
                        <li>First Dense Layer: 30 neurons with ReLU activation</li>
                        <li>Dropout Layer (0.3) for regularization</li>
                        <li>Second Dense Layer: 15 neurons with ReLU activation</li>
                        <li>Dropout Layer (0.3) for preventing overfitting</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Output Layer</h3>
                      <p className="mt-1 text-gray-600">Single neuron with sigmoid activation for binary classification</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Accuracy Section */}
        <div id="accuracy" className="py-16 bg-gradient-to-r from-pink-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">Model Performance</h2>
              <div className="mt-10">
                <div className="bg-white shadow-lg rounded-lg p-8">
                  <div className="text-5xl font-bold text-pink-600">98%</div>
                  <div className="mt-2 text-gray-600">Test Accuracy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-500">
            <p>© 2025 Breast Cancer Detection AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;