2.1)
Para utilizar Redux en el proyecto, generaria un archivo 'actions.js' donde defino las distintas acciones (funciones) que voy a
despachar desde los distintos componentes. Tambien, definiria otro archivo 'reducer.js' donde va a estar la reducer function
que recibe el resultado de las distintas acciones, y de acuerdo el tipo de accion, va a cambiar el estado (la funcion reducer
trabajaria con switch). Tambien, debo generar la store usando dicha funcion reductora, y un middleware en caso de que sea necesario (por ej: redux-thunk), y tambien debo englobar los componentes que quieran que esten bajo ese contexto con el componente Provider de react-redux.

2.2)
Para agregar una nueva ruta, primero agregaria el paquete 'react-router'. Luego dentro del componente <Routes> de react-router,
definiria los distintos componentes a renderizar, de acuerdo al path actual. Por ejemplo :

    <Routes>
    <Route path="/" element={<Home />}>
    <Route exact path="/login" element={<Login />}>
    <Route exact path="/about" element={<About />}>
    </Routes>

Tambien, es importante que englobemos nuestra App en el componente <BrowserRouter> para poder hacer buen uso del ruteo definido
en index.
