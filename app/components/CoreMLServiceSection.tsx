// components/CoreMLServiceSection.tsx
'use client';

const CoreMLServiceSection = () => {
  return (
    <section 
      id="core-ml-service"
      className="py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white"
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
        
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-8 text-cyan-400">
          Core Machine Learning Service
        </h2>

        {/* Description with Business Value */}
        <p className="text-lg mb-6 leading-relaxed text-gray-300">
          Our machine learning expertise helps you extract valuable insights from your data using techniques like 
          <strong className="text-white"> Time Series Analysis, Regression, Logistic Regression, Classification</strong>, and more. 
          By uncovering hidden patterns and predictive trends, we enable your business to make smarter, data-driven decisions 
          that can <strong className="text-white">increase operational efficiency, improve customer targeting, and ultimately boost profit margins.</strong>
        </p>

        {/* Highlighted Project */}
        <div className="bg-gray-900 rounded-2xl p-6 border border-gray-700/50 shadow-lg mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-blue-400">Will Customer Renew Your Insurance?</h3>
          
          <p className="text-gray-300 mb-4">
            This predictive analytics system determines the likelihood of a customer renewing their vehicle insurance. By focusing marketing and retention efforts 
            on customers with the highest probability of renewal, insurance companies can optimize their resources, save time, and achieve a higher conversion rate. 
            Ultimately, this translates to increased renewals and revenue growth.
          </p>
          
          <a 
            href="https://github.com/Excergic/Vehicle-Insurance-Product" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-500 transition-colors"
          >
            Project we have done
          </a>
        </div>

        {/* Additional Industries */}
        <div className="bg-gray-900 rounded-2xl p-6 border border-gray-700/50 shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-blue-400">ML in Other Industries</h3>
          
          <p className="text-gray-300 mb-4">
            Similarly, machine learning enables businesses in <strong className="text-white">Stock Market</strong> and <strong className="text-white">Finance</strong> industries to make smarter decisions through predictive models, anomaly detection, and automated risk assessment.
          </p>
          
          <p className="text-gray-300 mb-2">
            For example, in the stock market, ML algorithms analyze historic market data and identify patterns to aid portfolio management and algorithmic trading – leading to increased returns and reduced losses.
          </p>
          <p className="text-gray-300">
            In finance, fraud detection systems use ML to spot unusual transaction patterns in real-time, enabling fast prevention of fraudulent activities and reducing financial risk.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoreMLServiceSection;
