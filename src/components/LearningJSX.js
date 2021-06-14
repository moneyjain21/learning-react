import React, { createElement } from 'react';

const LearningJSX = () => {
    // this approach is writing component using JSX
    // return (
    //     <div className = 'parentClass'>
    //         <h1>Learning JSX</h1>
    //     </div>
    // )

    // this approach is writing component without using JSX
    /**createElement accepts 3 parameter:
     * First parameter - string which accepts HTML tag
     * Second parameter - used to pass any optional properties i.e. id, className etc, if you dont pass any property then pass null.
     * Third parameter - children for the HTML element i.e. value should be in string
     * 
     * Looking at second parameter, it is basically an object of key-value pair that will be applied to the element
    */
    return createElement('div', { id: 'parent', className: 'parentClass' }, createElement('h1', null, 'without using JSX'))
}

export default LearningJSX;