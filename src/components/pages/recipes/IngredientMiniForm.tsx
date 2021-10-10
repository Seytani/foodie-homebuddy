import React, { FunctionComponent } from 'react';

import '@/styles/components/pages/recipes/ingredient_mini_form.scss';
import Input from '@/components/base/Input';

const IngredientMiniForm: FunctionComponent = () => <div className="ingredient-miniform">
    <div className="d-flex mb-30">
        <div className="qty-field">
            <Input label="qty" />
        </div>
        <div className="name-field">
            <Input label="name" />
        </div>
    </div>
    <div className="d-flex fjc-flex-end">
        <button className="btn">Save</button>
        <button className="btn">Cancel</button>
    </div>
</div>;

export default IngredientMiniForm;