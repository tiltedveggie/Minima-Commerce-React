import React, { useState, useEffect } from 'react';
import ItemCount from './ItemCount/ItemCount.js';
import ItemDetail from './ItemList/ItemDetail/ItemDetail.js';
import { getItem } from '../helpers/mock.js';
import './ItemDetailContainer.css';

function ItemDetailContainer() {
  const [unicItem, setUnicItem] = useState([]);

  useEffect(() => {
    getItem
    .then(res => setUnicItem(res))
  }, [])

  return (
    <section>
        <ItemDetail unicItem={unicItem} />
    </section>
  );
}

export default ItemDetailContainer;