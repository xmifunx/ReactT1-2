import React from 'react';
import PropTypes from 'prop-types';
import classes from '../../css/storeclass.module.css';

class ShopItemClass extends React.Component {
 
    render() {
        const {item} = this.props
        return (
            <div className={classes["main-content"]}>
            <h2>{item.brand}</h2>
            <h1>{item.title}</h1>
            <h3>{item.description}</h3>
            <div className={classes["description"]}>{item.descriptionFull}</div>
            <div className={classes["highlight-window mobile"]}><div className={classes["highlight-overlay"]}></div></div>
            <div className={classes["divider"]}></div>
            <div className={classes["purchase-info"]}>
              <div className={classes["price"]}>{item.currency}{item.price}</div>
              <button>Добавить в корзину</button>
            </div>
          </div> 
        )
    }
}

ShopItemClass.propTypes = {
  item: PropTypes.object.isRequired
}

export default ShopItemClass;