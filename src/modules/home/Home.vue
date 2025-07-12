<template>
  <Header @open-cart="showCart = true" />
  <section class="relative overflow-hidden bg-gradient-to-br from-purple-100 via-indigo-50 to-white min-h-screen flex items-center">
    <!-- Elementos decorativos de fondo -->
    <div class="absolute inset-0 z-0">
      <div class="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-400/30 to-indigo-300/20 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-gradient-to-tr from-indigo-300/20 to-purple-200/30 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      <div class="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-white/50 to-purple-100/30 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
    </div>

    <div class="container mx-auto px-4 relative z-10 mt-16">
      <div class="flex flex-col lg:flex-row items-center gap-16">
        <!-- Contenido principal -->
        <div class="lg:w-1/2 text-center lg:text-left">
          <div class="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-400 text-white text-sm font-bold px-6 py-2 rounded-full mb-8 shadow-lg animate-bounce">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
            ¡Nuevo en Urban Accesorios!
          </div>
          
          <h1 class="text-4xl md:text-6xl font-bold leading-tight mb-8">
            <span class="bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
              Tu estilo
            </span>
            <br>
            <span class="text-gray-800">comienza aquí</span>
          </h1>
          
          <p class="text-xl md:text-2xl text-gray-700 mb-12 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
            Descubre la mejor selección de <span class="font-bold text-purple-600">accesorios premium</span> y <span class="font-bold text-purple-600">productos únicos</span> para todos los estilos.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-center mb-12">
            <router-link to="/accesorios" class="group relative bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-full text-base shadow-xl transform hover:scale-105 transition-all duration-300">
              <span class="relative z-10">Explorar Accesorios</span>
              <div class="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </router-link>
            <router-link to="/productos" class="bg-white/80 backdrop-blur-md border-2 border-purple-200 text-purple-700 hover:bg-purple-50 hover:border-purple-300 font-bold py-3 px-6 rounded-full text-base shadow-lg transform hover:scale-105 transition-all duration-300">
              Ver Productos
            </router-link>
          </div>
          
          <!-- Stats -->
          <div class="flex flex-wrap justify-center lg:justify-center gap-8">
            <div class="text-center">
              <div class="text-3xl font-bold text-purple-600">500+</div>
              <div class="text-sm text-gray-600">Productos</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-purple-600">5K+</div>
              <div class="text-sm text-gray-600">Clientes Felices</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-purple-600">24/7</div>
              <div class="text-sm text-gray-600">Soporte</div>
            </div>
          </div>
        </div>
        
        <!-- Sección de imagen/visual -->
        <div class="lg:w-1/2 mt-16 lg:mt-0 relative">
          <div class="relative">
            <!-- Contenedor principal de imagen -->
            <div class="relative w-full max-w-2xl mx-auto">
              <!-- Imagen principal -->
              <div class="relative bg-gradient-to-br from-white via-purple-50 to-indigo-50 rounded-3xl shadow-2xl border border-purple-100 p-8 transform hover:scale-105 transition-transform duration-700">
                <img 
                  src="../../../assets/mascotas.png" 
                  alt="Producto destacado" 
                  class="w-full h-80 object-contain rounded-2xl"
                >
              </div>
              
              <!-- Tarjetas flotantes -->
              <div class="absolute -top-8 -left-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-purple-100 animate-float">
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path d="M12 8v4l3 3"/>
                    </svg>
                  </div>
                  <div>
                    <p class="text-xs text-gray-500 font-medium">Envío Express</p>
                    <p class="font-bold text-gray-800">24-48 horas</p>
                  </div>
                </div>
              </div>
              
              <div class="absolute -bottom-8 -right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-pink-100 animate-float animation-delay-1000">
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path d="M12 21C12 21 4 13.5 4 8.5C4 5.5 6.5 3 9.5 3C11.24 3 12 4.5 12 4.5C12 4.5 12.76 3 14.5 3C17.5 3 20 5.5 20 8.5C20 13.5 12 21 12 21Z"/>
                    </svg>
                  </div>
                  <div>
                    <p class="text-xs text-gray-500 font-medium">Garantía</p>
                    <p class="font-bold text-gray-800">100% Satisfacción</p>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-1/2 -right-12 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-indigo-100 animate-float animation-delay-2000">
                <div class="text-center">
                  <div class="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <p class="text-xs text-gray-500 font-medium">Calidad</p>
                  <p class="font-bold text-gray-800 text-sm">Premium</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Categorías destacadas -->
      <div class="mt-24">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span class="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Ofertas Destacadas
            </span>
          </h2>
          <p class="text-gray-600 text-lg max-w-2xl mx-auto">
            Descubre las mejores promociones y productos exclusivos seleccionados especialmente para ti
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Card 1 - Mega Sale Principal -->
          <div class="md:col-span-2 group bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 rounded-3xl shadow-2xl hover:shadow-3xl p-8 border border-purple-200/50 transform hover:scale-[1.02] transition-all duration-500 relative overflow-hidden min-h-[350px] flex items-center">
            <!-- Elementos decorativos de fondo -->
            <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50"></div>
            <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32 blur-2xl"></div>
            <div class="absolute bottom-0 left-0 w-48 h-48 bg-purple-300/20 rounded-full translate-y-24 -translate-x-24 blur-xl"></div>
            
            <!-- Badge de oferta -->
            <div class="absolute top-6 left-6 bg-yellow-400 text-black font-bold px-4 py-2 rounded-full text-sm shadow-lg animate-pulse">
              🔥 MEGA SALE
            </div>
            
            <!-- Contenido principal -->
            <div class="flex-1 relative z-10">
              <div class="mb-4">
                <span class="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
                  ⚡ Por tiempo limitado
                </span>
              </div>
              
              <h3 class="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Hasta 
                <span class="text-yellow-300 text-6xl">50%</span>
                <br>
                de descuento
              </h3>
              
              <p class="text-white/90 mb-8 max-w-md text-lg leading-relaxed">
                Descubre ofertas increíbles en toda nuestra colección premium. Calidad excepcional a precios únicos.
              </p>
              
              <div class="flex flex-col sm:flex-row gap-4">
                <router-link to="/productos" class="inline-flex items-center justify-center bg-white text-purple-600 hover:bg-purple-50 font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  <span class="mr-2">🛍️</span>
                  Comprar Ahora
                </router-link>
                <router-link to="/accesorios" class="inline-flex items-center justify-center bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 font-bold py-4 px-8 rounded-xl transition-all duration-300">
                  Ver Catálogo
                  <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </router-link>
              </div>
              
              <!-- Contador de tiempo -->
              <div class="mt-6 flex items-center gap-4 text-white/80">
                <span class="text-sm font-medium">⏰ Termina en:</span>
                <div class="flex gap-2">
                  <div class="bg-white/20 backdrop-blur-sm px-3 py-2 rounded-lg text-center">
                    <div class="text-white font-bold">02</div>
                    <div class="text-xs">días</div>
                  </div>
                  <div class="bg-white/20 backdrop-blur-sm px-3 py-2 rounded-lg text-center">
                    <div class="text-white font-bold">14</div>
                    <div class="text-xs">hrs</div>
                  </div>
                  <div class="bg-white/20 backdrop-blur-sm px-3 py-2 rounded-lg text-center">
                    <div class="text-white font-bold">32</div>
                    <div class="text-xs">min</div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Imagen del producto -->
            <div class="flex-1 flex justify-end relative z-10">
              <div class="relative">
                <div class="absolute inset-0 bg-white/20 rounded-full blur-2xl scale-110"></div>
                <img 
                  src="../../../assets/mascotas.png" 
                  alt="Productos en oferta" 
                  class="w-56 h-56 object-contain relative z-10 drop-shadow-2xl"
                >
                <!-- Precio destacado -->
                <div class="absolute -bottom-4 -right-4 bg-yellow-400 text-black font-bold px-4 py-3 rounded-2xl shadow-xl">
                  <div class="text-xs opacity-75 line-through">$99.99</div>
                  <div class="text-lg">$49.99</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Card 2 - Colección de Verano -->
          <div class="group bg-gradient-to-br from-orange-400 via-amber-400 to-yellow-400 rounded-3xl shadow-xl hover:shadow-2xl p-6 border border-orange-200/50 transform hover:scale-105 transition-all duration-300 relative overflow-hidden min-h-[350px] flex flex-col">
            <!-- Elementos decorativos -->
            <div class="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -translate-y-16 translate-x-16 blur-xl"></div>
            <div class="absolute bottom-0 left-0 w-24 h-24 bg-orange-300/30 rounded-full translate-y-12 -translate-x-12 blur-lg"></div>
            
            <!-- Badge -->
            <div class="absolute top-4 right-4 bg-white/90 text-orange-600 font-bold px-3 py-1 rounded-full text-xs shadow-lg">
              ☀️ SUMMER
            </div>
            
            <!-- Contenido -->
            <div class="relative z-10 flex-1 flex flex-col">
              <div class="mb-4">
                <div class="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                  <img 
                    src="../../../assets/luna1.png" 
                    alt="Summer Collection" 
                    class="w-12 h-12 object-cover rounded-xl"
                  >
                </div>
                <h4 class="text-2xl font-bold text-white mb-2">Colección</h4>
                <h5 class="text-3xl font-bold text-white">Verano 2024</h5>
              </div>
              
              <p class="text-white/90 mb-6 text-sm leading-relaxed flex-1">
                Productos frescos y vibrantes para la temporada más calurosa del año.
              </p>
              
              <div class="space-y-3">
                <div class="flex items-center text-white/90 text-sm">
                  <span class="w-2 h-2 bg-white rounded-full mr-2"></span>
                  Envío gratis en compras +$50
                </div>
                <div class="flex items-center text-white/90 text-sm">
                  <span class="w-2 h-2 bg-white rounded-full mr-2"></span>
                  Garantía de satisfacción
                </div>
              </div>
              
              <router-link to="/accesorios" class="mt-6 inline-flex items-center justify-center bg-white text-orange-500 hover:bg-orange-50 font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Descubrir
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Sección de Productos Más Vendidos -->
  <section class="py-20 bg-gradient-to-br from-white via-purple-50/30 to-indigo-50/30">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-bold px-6 py-2 rounded-full mb-6 shadow-lg">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>
          🏆 Los Favoritos de Nuestros Clientes
        </div>
        
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Productos 
          <span class="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Más Vendidos
          </span>
        </h2>
        <p class="text-gray-600 text-lg max-w-2xl mx-auto">
          Descubre los productos que han conquistado a miles de clientes. Calidad comprobada y satisfacción garantizada.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Producto 1 -->
        <div class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden border border-gray-100">
          <!-- Badge de bestseller -->
          <div class="absolute top-4 left-4 z-10 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            #1 Best Seller
          </div>
          
          <!-- Imagen del producto -->
          <div class="relative bg-gradient-to-br from-purple-50 to-indigo-50 h-64 flex items-center justify-center overflow-hidden">
            <img 
              src="../../../assets/luna1.png" 
              alt="Producto más vendido" 
              class="w-40 h-40 object-contain group-hover:scale-110 transition-transform duration-300"
            >
            <!-- Overlay con botones -->
            <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
              <button class="bg-white/90 backdrop-blur-sm text-gray-700 p-2 rounded-full shadow-lg hover:bg-white transition-all duration-200">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
              </button>
              <button class="bg-purple-600 text-white p-2 rounded-full shadow-lg hover:bg-purple-700 transition-all duration-200">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H19M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z"/>
                </svg>
              </button>
            </div>
          </div>
          
          <!-- Contenido del producto -->
          <div class="p-6">
            <!-- Rating -->
            <div class="flex items-center gap-1 mb-3">
              <div class="flex text-yellow-400">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <span class="text-sm text-gray-600 ml-1">(4.9) • 1,247 reseñas</span>
            </div>
            
            <h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
              Accesorio Premium Luna
            </h3>
            <p class="text-gray-600 text-sm mb-4 line-clamp-2">
              El accesorio más vendido de nuestra colección. Diseño elegante y funcionalidad excepcional.
            </p>
            
            <!-- Precio -->
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="text-2xl font-bold text-purple-600">$29.99</span>
                <span class="text-sm text-gray-500 line-through">$39.99</span>
              </div>
              <div class="text-xs text-green-600 font-semibold bg-green-50 px-2 py-1 rounded-full">
                -25% OFF
              </div>
            </div>
            
            <!-- Indicador de stock -->
            <div class="mt-3 flex items-center gap-2">
              <div class="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                <div class="bg-gradient-to-r from-orange-400 to-red-500 h-full rounded-full" style="width: 85%"></div>
              </div>
              <span class="text-xs text-gray-600">Solo quedan 12</span>
            </div>
          </div>
        </div>

        <!-- Producto 2 -->
        <div class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden border border-gray-100">
          <div class="absolute top-4 left-4 z-10 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            #2 Trending
          </div>
          
          <div class="relative bg-gradient-to-br from-blue-50 to-cyan-50 h-64 flex items-center justify-center overflow-hidden">
            <img 
              src="../../../assets/luna2.png" 
              alt="Producto trending" 
              class="w-40 h-40 object-contain group-hover:scale-110 transition-transform duration-300"
            >
            <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
              <button class="bg-white/90 backdrop-blur-sm text-gray-700 p-2 rounded-full shadow-lg hover:bg-white transition-all duration-200">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
              </button>
              <button class="bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-200">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H19M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z"/>
                </svg>
              </button>
            </div>
          </div>
          
          <div class="p-6">
            <div class="flex items-center gap-1 mb-3">
              <div class="flex text-yellow-400">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <span class="text-sm text-gray-600 ml-1">(4.8) • 892 reseñas</span>
            </div>
            
            <h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              Kit Básico Esencial
            </h3>
            <p class="text-gray-600 text-sm mb-4 line-clamp-2">
              Todo lo que necesitas en un solo pack. Ideal para empezar tu colección.
            </p>
            
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="text-2xl font-bold text-blue-600">$24.99</span>
                <span class="text-sm text-gray-500 line-through">$34.99</span>
              </div>
              <div class="text-xs text-green-600 font-semibold bg-green-50 px-2 py-1 rounded-full">
                -29% OFF
              </div>
            </div>
            
            <div class="mt-3 flex items-center gap-2">
              <div class="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                <div class="bg-gradient-to-r from-green-400 to-emerald-500 h-full rounded-full" style="width: 95%"></div>
              </div>
              <span class="text-xs text-gray-600">¡Casi agotado!</span>
            </div>
          </div>
        </div>

        <!-- Producto 3 -->
        <div class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden border border-gray-100">
          <div class="absolute top-4 left-4 z-10 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            #3 Popular
          </div>
          
          <div class="relative bg-gradient-to-br from-emerald-50 to-teal-50 h-64 flex items-center justify-center overflow-hidden">
            <img 
              src="../../../assets/mascotas.png" 
              alt="Producto popular" 
              class="w-40 h-40 object-contain group-hover:scale-110 transition-transform duration-300"
            >
            <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
              <button class="bg-white/90 backdrop-blur-sm text-gray-700 p-2 rounded-full shadow-lg hover:bg-white transition-all duration-200">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
              </button>
              <button class="bg-emerald-600 text-white p-2 rounded-full shadow-lg hover:bg-emerald-700 transition-all duration-200">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H19M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z"/>
                </svg>
              </button>
            </div>
          </div>
          
          <div class="p-6">
            <div class="flex items-center gap-1 mb-3">
              <div class="flex text-yellow-400">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <span class="text-sm text-gray-600 ml-1">(4.7) • 756 reseñas</span>
            </div>
            
            <h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
              Colección Mascota Plus
            </h3>
            <p class="text-gray-600 text-sm mb-4 line-clamp-2">
              Diseño adorable y funcional. Perfecto para los amantes de las mascotas.
            </p>
            
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="text-2xl font-bold text-emerald-600">$34.99</span>
                <span class="text-sm text-gray-500 line-through">$44.99</span>
              </div>
              <div class="text-xs text-green-600 font-semibold bg-green-50 px-2 py-1 rounded-full">
                -22% OFF
              </div>
            </div>
            
            <div class="mt-3 flex items-center gap-2">
              <div class="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                <div class="bg-gradient-to-r from-emerald-400 to-green-500 h-full rounded-full" style="width: 70%"></div>
              </div>
              <span class="text-xs text-gray-600">Disponible</span>
            </div>
          </div>
        </div>

        <!-- Producto 4 -->
        <div class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden border border-gray-100">
          <div class="absolute top-4 left-4 z-10 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            Nuevo
          </div>
          
          <div class="relative bg-gradient-to-br from-pink-50 to-rose-50 h-64 flex items-center justify-center overflow-hidden">
            <img 
              src="../../../assets/luna1.png" 
              alt="Producto nuevo" 
              class="w-40 h-40 object-contain group-hover:scale-110 transition-transform duration-300"
            >
            <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
              <button class="bg-white/90 backdrop-blur-sm text-gray-700 p-2 rounded-full shadow-lg hover:bg-white transition-all duration-200">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
              </button>
              <button class="bg-pink-600 text-white p-2 rounded-full shadow-lg hover:bg-pink-700 transition-all duration-200">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H19M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z"/>
                </svg>
              </button>
            </div>
          </div>
          
          <div class="p-6">
            <div class="flex items-center gap-1 mb-3">
              <div class="flex text-yellow-400">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <span class="text-sm text-gray-600 ml-1">(4.6) • 234 reseñas</span>
            </div>
            
            <h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
              Luna Elegance Pro
            </h3>
            <p class="text-gray-600 text-sm mb-4 line-clamp-2">
              Último lanzamiento con tecnología avanzada. Elegancia y funcionalidad en uno.
            </p>
            
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="text-2xl font-bold text-pink-600">$39.99</span>
                <span class="text-sm text-gray-500 line-through">$54.99</span>
              </div>
              <div class="text-xs text-green-600 font-semibold bg-green-50 px-2 py-1 rounded-full">
                -27% OFF
              </div>
            </div>
            
            <div class="mt-3 flex items-center gap-2">
              <div class="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                <div class="bg-gradient-to-r from-pink-400 to-purple-500 h-full rounded-full" style="width: 100%"></div>
              </div>
              <span class="text-xs text-gray-600">En stock</span>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA para ver más productos -->
      <div class="text-center mt-12">
        <router-link to="/productos" class="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
          <span>Ver Todos los Productos</span>
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </router-link>
      </div>
    </div>
  </section>

  <!-- Sección de características -->
  <section class="py-20 bg-gradient-to-br from-gray-50 to-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          ¿Por qué elegir 
          <span class="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Urban Accesorios?
          </span>
        </h2>
        <p class="text-gray-600 text-lg max-w-2xl mx-auto">
          Nos destacamos por ofrecer la mejor experiencia de compra con productos de calidad y servicio excepcional
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Característica 1 -->
        <div class="group text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M12 8v4l3 3"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Envío Rápido</h3>
          <p class="text-gray-600">Entrega en 24-48 horas en toda la ciudad. Envío gratis en compras superiores a $50.</p>
        </div>

        <!-- Característica 2 -->
        <div class="group text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          <div class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Calidad Garantizada</h3>
          <p class="text-gray-600">Todos nuestros productos pasan por estrictos controles de calidad. Garantía de satisfacción 100%.</p>
        </div>

        <!-- Característica 3 -->
        <div class="group text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          <div class="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Atención Personalizada</h3>
          <p class="text-gray-600">Nuestro equipo está disponible 24/7 para ayudarte con cualquier consulta o problema.</p>
        </div>

        <!-- Característica 4 -->
        <div class="group text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Mejores Precios</h3>
          <p class="text-gray-600">Precios competitivos y ofertas exclusivas. Si encuentras un precio mejor, te lo igualamos.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Sección de testimonios -->
  <section class="py-20 bg-gradient-to-br from-purple-50 via-indigo-50 to-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Lo que dicen nuestros 
          <span class="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            clientes
          </span>
        </h2>
        <p class="text-gray-600 text-lg max-w-2xl mx-auto">
          Miles de clientes satisfechos confían en nosotros para sus compras de accesorios y productos
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Testimonio 1 -->
        <div class="bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 transition-all duration-300 transform hover:scale-105">
          <div class="flex items-center mb-6">
            <div class="flex text-yellow-400">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
          </div>
          <p class="text-gray-700 mb-6 leading-relaxed">
            "Excelente calidad y servicio. Los productos llegaron súper rápido y exactamente como se mostraban en la página. Definitivamente volveré a comprar."
          </p>
          <div class="flex items-center">
            <div class="w-12 h-12 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full flex items-center justify-center text-white font-bold">
              M
            </div>
            <div class="ml-4">
              <h4 class="font-bold text-gray-900">María González</h4>
              <p class="text-gray-600 text-sm">Cliente verificado</p>
            </div>
          </div>
        </div>

        <!-- Testimonio 2 -->
        <div class="bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 transition-all duration-300 transform hover:scale-105">
          <div class="flex items-center mb-6">
            <div class="flex text-yellow-400">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
          </div>
          <p class="text-gray-700 mb-6 leading-relaxed">
            "Me encanta la variedad de productos y los precios súper accesibles. El sitio web es fácil de usar y el proceso de compra muy sencillo."
          </p>
          <div class="flex items-center">
            <div class="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full flex items-center justify-center text-white font-bold">
              C
            </div>
            <div class="ml-4">
              <h4 class="font-bold text-gray-900">Carlos Ramírez</h4>
              <p class="text-gray-600 text-sm">Cliente verificado</p>
            </div>
          </div>
        </div>

        <!-- Testimonio 3 -->
        <div class="bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 transition-all duration-300 transform hover:scale-105">
          <div class="flex items-center mb-6">
            <div class="flex text-yellow-400">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
          </div>
          <p class="text-gray-700 mb-6 leading-relaxed">
            "Atención al cliente excepcional. Tuve una consulta y me respondieron inmediatamente. Los productos son de excelente calidad."
          </p>
          <div class="flex items-center">
            <div class="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center text-white font-bold">
              A
            </div>
            <div class="ml-4">
              <h4 class="font-bold text-gray-900">Ana López</h4>
              <p class="text-gray-600 text-sm">Cliente verificado</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <ContactSection />
  <Footer />
  <CartSidebar v-if="showCart" @close="showCart = false" />
  <Chatbot />
</template>

<script setup>
import { ref } from 'vue'
import Header from '../../shared/components/Header.vue'
import Footer from '../../shared/components/Footer.vue'
import CartSidebar from '../../shared/components/CartSidebar.vue'
import Chatbot from '../../shared/components/Chatbot.vue'
import { provideCart } from '../../shared/components/useCart.js'
import ContactSection from '../../shared/components/ContactSection.vue'

provideCart()

const showCart = ref(false)
const categories = [
  { key: 'hogar', label: 'Cosas del Hogar' },
  { key: 'cuidado', label: 'Cuidado Personal' },
  { key: 'nutricion', label: 'Nutrición' }
]
const activeCategory = ref(categories[0].key)
</script>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes glow {
  0%, 100% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.4); }
  50% { box-shadow: 0 0 30px rgba(168, 85, 247, 0.6), 0 0 40px rgba(168, 85, 247, 0.3); }
}

@keyframes slideIn {
  from { transform: translateX(-100px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

@keyframes fadeInUp {
  from { transform: translateY(30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-glow {
  animation: glow 2s ease-in-out infinite;
}

.animate-slideIn {
  animation: slideIn 0.8s ease-out;
}

.animate-fadeInUp {
  animation: fadeInUp 0.6s ease-out;
}

.animation-delay-1000 {
  animation-delay: 1s;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-3000 {
  animation-delay: 3s;
}

/* Efectos hover mejorados */
.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

.group:hover .group-hover\:rotate-3 {
  transform: rotate(3deg);
}

/* Gradientes animados */
.bg-gradient-animated {
  background: linear-gradient(-45deg, #667eea, #764ba2, #f093fb, #f5576c);
  background-size: 400% 400%;
  animation: gradientShift 4s ease infinite;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Efectos de resplandor para las cards */
.card-glow:hover {
  box-shadow: 
    0 10px 25px rgba(0, 0, 0, 0.2),
    0 0 50px rgba(168, 85, 247, 0.3),
    inset 0 0 20px rgba(255, 255, 255, 0.1);
}

/* Animación de pulso suave */
.pulse-soft {
  animation: pulseSoft 3s ease-in-out infinite;
}

@keyframes pulseSoft {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.9; }
}

/* Efectos de texto brillante */
.text-glow {
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
}

/* Backdrop blur mejorado */
.backdrop-blur-strong {
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
}
</style>
