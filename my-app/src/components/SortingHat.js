import React from 'react';


function SortingHat() {
  const houses = ['Hufflepuff,Slytherin,Ravenclaw,Gryffindor']

  return (
    <div className='sorting-hat'>
      <img src='images/sorting.jpg'/>
      <p>Here you can take a quiz and determine witch Hogwarts house you would belong to. </p>
      <button>Take The Quiz</button>
    </div>
  );
}

export default SortingHat;