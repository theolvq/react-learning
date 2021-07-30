import React, { useEffect, useState } from 'react';

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const url =
    'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json';

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setAllPhotos(data));
  }, []);

  const toggleFavorite = id => {
    const updatedPhotoArr = allPhotos.map(photo => {
      if (photo.id === id) {
        return {
          ...photo,
          isFavorite: !photo.isFavorite,
        };
      }
      return photo;
    });
    setAllPhotos(updatedPhotoArr);
  };

  const addToCart = newItem =>
    setCartItems(prevItems => [...prevItems, newItem]);

  const removeFromCart = id =>
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));

  const emptyCart = () => setCartItems([]);

  return (
    <Context.Provider
      value={{
        allPhotos,
        cartItems,
        toggleFavorite,
        addToCart,
        removeFromCart,
        emptyCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};

// class ContextProvider extends Component {
//   state = {
//     context: '',
//   };

//   render() {
//     return <Provider value={{ context: '' }}>{this.props.children}</Provider>;
//   }
// }

export { Context, ContextProvider };
