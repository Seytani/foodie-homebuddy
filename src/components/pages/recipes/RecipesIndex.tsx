import React, { FunctionComponent } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import "@/styles/components/pages/recipes/recipes_index.scss";
import strawberryImage from "@/assets/img/strawberry-grain.png";
import fruitBowlImage from "@/assets/img/img-fruit-bowl.png";

import { useSelector } from "@/store/hooks";
import { recipesSelector } from "@/store/recipes-slice";

import RecipeCard from "./RecipeCard";

const RecipesIndex: FunctionComponent = () => {
	const { url } = useRouteMatch();

	const recipes = useSelector(recipesSelector);

	const recipeList = recipes.map((rp: RecipeInterface) => (
		<li key={rp.id}>
			<Link
				to={{
					pathname: `${url}/${rp.id}`,
					state: { recipe: rp },
				}}
			>
				<RecipeCard recipe={rp} />
			</Link>
		</li>
	));

	return (
		<div className="recipes-index">
			<div className="header d-flex fjc-center">
				<img
					className="strawberry"
					src={strawberryImage}
					alt="Strawberry"
				/>
				<div className="search d-flex fai-center">
					<span className="icon material-icons">search</span>
					<input type="text" />
				</div>
				<img
					className="fruit-bowl"
					src={fruitBowlImage}
					alt="Strawberry"
				/>
			</div>

			<div className="recipe-list">
				<div className="d-flex">
					<h4 className="fgrow-1">Your recipes</h4>
					<div>
						<Link to="recipes/new">
							<button>Add Recipe</button>
						</Link>
					</div>
				</div>
				<ul className="d-flex flex-wrap">{recipeList}</ul>
			</div>
		</div>
	);
};

export default RecipesIndex;
