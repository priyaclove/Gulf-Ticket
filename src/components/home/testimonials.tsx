const testimonials = [  
    {  
      name: "Jane Doe",  
      title: "Product Manager",  
      image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.adobe.com%2Facrobat%2Fhub%2Fguide-to-image-file-formats.html&psig=AOvVaw3cRcYbQX1SAbqcx8bp8iKr&ust=1746520923185000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIiU3-X3i40DFQAAAAAdAAAAABAE",  
    },  
    {  
      name: "John Smith",  
      title: "Developer",  
      image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.adobe.com%2Facrobat%2Fhub%2Fguide-to-image-file-formats.html&psig=AOvVaw3cRcYbQX1SAbqcx8bp8iKr&ust=1746520923185000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIiU3-X3i40DFQAAAAAdAAAAABAE",  
      quote: "Amazing experience, fantastic support and features.",  
    }  
  ];  
    
  export default function Testimonials() {  
    return (  
      <section className="bg-gray-50 py-16">  
        <div className=" px-4">  
          <h2 className="text-3xl font-bold text-center mb-10">What Our Users Say</h2>  
          <div className="grid md:grid-cols-2 gap-8">  
            {testimonials.map((t, i) => (  
              <div  
                key={i}  
                className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center"  
              >  
                <img  
                  src={t.image}  
                  alt={t.name}  
                  className="w-20 h-20 rounded-full border-4 border-indigo-500 mb-4"  
                />  
                <p className="text-gray-700 italic mb-4 text-center">"{t.quote}"</p>  
                <div className="text-center">  
                  <p className="font-semibold text-indigo-600">{t.name}</p>  
                  <p className="text-gray-500 text-sm">{t.title}</p>  
                </div>  
              </div>  
            ))}  
          </div>  
        </div>  
      </section>  
    );  
  }
  