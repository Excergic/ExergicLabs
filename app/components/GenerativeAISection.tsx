// components/GenerativeAISection.tsx
'use client';

const GenerativeAISection = () => {
  return (
    <section 
      id="genai"
      className="py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white"
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
        
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-10 text-purple-400">
          Generative AI
        </h2>

        {/* Overview */}
        <p className="text-lg mb-8 leading-relaxed text-gray-300">
          Generative AI has been a hot and in-demand technology for the last 3 years, revolutionizing industries globally by creating innovative solutions 
          in <strong className="text-white">text</strong>, <strong className="text-white">image</strong>, <strong className="text-white">video</strong>, and <strong className="text-white">audio generation</strong>. 
          These models empower companies to automate creative tasks, generate realistic synthetic content, and deliver personalized experiences at scale.
        </p>

        <div className="space-y-12">

          {/* Newton LLM */}
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700/50 shadow-lg">
            <h3 className="text-3xl font-semibold mb-4 text-pink-400">Newton LLM</h3>
            <p className="text-gray-300 mb-4">
              Newton LLM is a powerful Retrieval-Augmented Generation (RAG) system developed for educational purposes. 
              It leverages technologies such as Airflow for data ingestion pipelines, PostgreSQL as the primary database, DAG management, and live URLs for dynamic data handling. 
              The RAG pipeline uses Qdrant Vector Database for efficient similarity search, and the model is deployed using FastAPI for high performance.
            </p>
            <p className="text-gray-300 mb-4">
              This system enables educational platforms to provide precise and contextual answers by dynamically retrieving and generating content, greatly improving learner engagement and knowledge retention.
            </p>
            <a 
              href="https://github.com/your-username/newton-llm" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 rounded-lg font-semibold hover:from-pink-400 hover:to-purple-500 transition-colors"
            >
              Project we have done
            </a>
          </div>

          {/* Doctor-AI */}
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700/50 shadow-lg">
            <h3 className="text-3xl font-semibold mb-4 text-green-400">Doctor-AI</h3>
            <p className="text-gray-300 mb-4">
              Doctor-AI is an advanced AI assistant tailored for the healthcare sector. It integrates a robust data ingestion pipeline, text modeling, and image-to-text conversion capabilities. 
              We leverage Groq Accelerators, RAG pipelines, and Qdrant Vector Database to provide efficient real-time healthcare insights.
            </p>
            <p className="text-gray-300 mb-4">
              Acting as a virtual family doctor, Doctor-AI provides diagnostic suggestions along with warnings to seek second opinions. Additionally, it can analyse medical images including medicines and ECGs, assisting healthcare professionals with critical decision-making.
            </p>
            <a 
              href="https://github.com/your-username/doctor-ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-green-500 to-teal-600 px-6 py-3 rounded-lg font-semibold hover:from-green-400 hover:to-teal-500 transition-colors"
            >
              Project we have done
            </a>
          </div>

          {/* Alexa: MultiModal Agent */}
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700/50 shadow-lg">
            <h3 className="text-3xl font-semibold mb-4 text-blue-400">Alexa: WhatsApp MultiModal Agent</h3>
            <p className="text-gray-300 mb-4">
              This multi-modal AI agent transforms WhatsApp interaction by combining text, voice, image capabilities, and intelligent context management. Unlike simple chatbots, Alexa has its own memory, works on a schedule, and recognizes location contexts.
            </p>
            <p className="text-gray-300 mb-4">
              It uses SQLite for short-term memory storage and Qdrant for long-term memory. Text models like Groq LLaMA 3.3 90B power its language understanding. Speech-to-text and text-to-speech are handled by Eleven Labs, while image generation uses Nano Banana models. Vision analysis is powered by Groq LLaMA-Vision models.
            </p>
            <a 
              href="https://github.com/your-username/alexa-whatsapp-agent" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-blue-500 to-cyan-600 px-6 py-3 rounded-lg font-semibold hover:from-blue-400 hover:to-cyan-500 transition-colors"
            >
              Project we have done
            </a>
          </div>

          {/* Additional Industries */}
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700/50 shadow-lg">
            <h3 className="text-3xl font-semibold mb-4 text-purple-400">ML & AI in Various Industries</h3>
            <p className="text-gray-300 mb-4">
              Beyond these projects, ML and AI are transforming numerous industries. In finance, AI-powered crypto trading agents optimize buy/sell decisions and portfolio management. Autonomous and autopilot technologies in the automotive industry utilize ML for safer and smarter vehicles.
            </p>
            <p className="text-gray-300">
              The continuous advancements in AI and generative models open new possibilities across sectors, enabling businesses to innovate, automate, and remain competitive.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GenerativeAISection;
