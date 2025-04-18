import { FC } from 'react';
import { Preloader } from '../ui/preloader';
import { IngredientDetailsUI } from '../ui/ingredient-details';
import { useSelector } from '../../services/store';
import { useParams } from 'react-router-dom';
import { getIngredientsWithSelector } from '../../services/slices/IngredientsSlice';
import styles from '../app/app.module.css';

export const IngredientDetails: FC = () => {
  const ingredients = useSelector(getIngredientsWithSelector);

  const { id } = useParams(); // id из url

  const ingredientData = ingredients.find((item) => item._id === id);

  if (!ingredientData) {
    return <Preloader />;
  }

  return (
    <div className={styles.detailPageWrap}>
      <IngredientDetailsUI ingredientData={ingredientData} />
    </div>
  );
};
