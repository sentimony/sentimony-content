import Radium from 'radium'
import React from 'react'

import Burger from './Burger';
import Widget1x1 from './Widget1x1';
import Widget2x1 from './Widget2x1';
import Widget3x1 from './Widget3x1';

class Wrapper extends React.Component {
  render() {
    return (
      <div style={styles.wrapper}>

        <Burger />

        <div className='clearfix' style={styles.widgetContainer}>

          <Widget3x1 />
          <Widget1x1 />

        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolore debitis earum consequuntur nihil distinctio reprehenderit voluptate est molestias, necessitatibus velit quisquam quibusdam sit similique, animi cum dolorum atque minus. Minima earum magnam est cupiditate dolor repudiandae porro provident quam sequi ipsa, reprehenderit distinctio atque quas corporis molestias. Eligendi iusto quo maxime hic esse nobis amet vero, earum quis ducimus a adipisci sequi consequatur qui, fugit est. Quae maiores repellendus accusantium necessitatibus vel nemo fuga qui quasi, magni adipisci hic laudantium nobis consectetur distinctio? At, aliquid ea! Illo cupiditate pariatur tenetur aut a, perferendis accusantium vitae libero sequi sed dicta ad quas voluptatem, excepturi quisquam voluptatibus laborum nulla molestias beatae assumenda! Velit doloremque error suscipit, labore ex cum ducimus quidem blanditiis animi reprehenderit, qui debitis a assumenda, voluptatum odit, repellat culpa repudiandae excepturi illo. Vitae aspernatur maiores cumque earum, ex harum consequuntur distinctio voluptatum! Quis dolorum consequuntur suscipit adipisci quae, officia, repellendus repellat quod. Suscipit odit reiciendis expedita ratione consequuntur tempore nisi quo rem omnis cumque quidem cupiditate obcaecati, aspernatur vitae voluptas iusto, tenetur reprehenderit iste aut! Delectus ipsa, minus maiores totam sunt consequatur ducimus fugiat excepturi aut tenetur nesciunt, sapiente sint optio omnis exercitationem nobis aspernatur nulla fuga ea quia quaerat laborum aperiam. Vel, at possimus necessitatibus cum dolorem nisi fuga. Accusamus quas porro ducimus cum natus incidunt, ea quaerat voluptatum vitae modi assumenda aliquam delectus facere ipsam corporis veniam iste necessitatibus expedita perspiciatis, tempora laborum officia rerum. Nostrum blanditiis quae at accusamus, perspiciatis ratione laudantium, maxime rerum illo.
        </p>

        <div className='clearfix' style={styles.widgetContainer}>

          <Widget1x1 />
          <Widget1x1 />
          <Widget1x1 />
          <Widget1x1 />

          <Widget2x1 />
          <Widget2x1 />

          <Widget3x1 />
          <Widget1x1 />

        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolore debitis earum consequuntur nihil distinctio reprehenderit voluptate est molestias, necessitatibus velit quisquam quibusdam sit similique, animi cum dolorum atque minus. Minima earum magnam est cupiditate dolor repudiandae porro provident quam sequi ipsa, reprehenderit distinctio atque quas corporis molestias. Eligendi iusto quo maxime hic esse nobis amet vero, earum quis ducimus a adipisci sequi consequatur qui, fugit est. Quae maiores repellendus accusantium necessitatibus vel nemo fuga qui quasi, magni adipisci hic laudantium nobis consectetur distinctio? At, aliquid ea! Illo cupiditate pariatur tenetur aut a, perferendis accusantium vitae libero sequi sed dicta ad quas voluptatem, excepturi quisquam voluptatibus laborum nulla molestias beatae assumenda! Velit doloremque error suscipit, labore ex cum ducimus quidem blanditiis animi reprehenderit, qui debitis a assumenda, voluptatum odit, repellat culpa repudiandae excepturi illo. Vitae aspernatur maiores cumque earum, ex harum consequuntur distinctio voluptatum! Quis dolorum consequuntur suscipit adipisci quae, officia, repellendus repellat quod. Suscipit odit reiciendis expedita ratione consequuntur tempore nisi quo rem omnis cumque quidem cupiditate obcaecati, aspernatur vitae voluptas iusto, tenetur reprehenderit iste aut! Delectus ipsa, minus maiores totam sunt consequatur ducimus fugiat excepturi aut tenetur nesciunt, sapiente sint optio omnis exercitationem nobis aspernatur nulla fuga ea quia quaerat laborum aperiam. Vel, at possimus necessitatibus cum dolorem nisi fuga. Accusamus quas porro ducimus cum natus incidunt, ea quaerat voluptatum vitae modi assumenda aliquam delectus facere ipsam corporis veniam iste necessitatibus expedita perspiciatis, tempora laborum officia rerum. Nostrum blanditiis quae at accusamus, perspiciatis ratione laudantium, maxime rerum illo.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolore debitis earum consequuntur nihil distinctio reprehenderit voluptate est molestias, necessitatibus velit quisquam quibusdam sit similique, animi cum dolorum atque minus. Minima earum magnam est cupiditate dolor repudiandae porro provident quam sequi ipsa, reprehenderit distinctio atque quas corporis molestias. Eligendi iusto quo maxime hic esse nobis amet vero, earum quis ducimus a adipisci sequi consequatur qui, fugit est. Quae maiores repellendus accusantium necessitatibus vel nemo fuga qui quasi, magni adipisci hic laudantium nobis consectetur distinctio? At, aliquid ea! Illo cupiditate pariatur tenetur aut a, perferendis accusantium vitae libero sequi sed dicta ad quas voluptatem, excepturi quisquam voluptatibus laborum nulla molestias beatae assumenda! Velit doloremque error suscipit, labore ex cum ducimus quidem blanditiis animi reprehenderit, qui debitis a assumenda, voluptatum odit, repellat culpa repudiandae excepturi illo. Vitae aspernatur maiores cumque earum, ex harum consequuntur distinctio voluptatum! Quis dolorum consequuntur suscipit adipisci quae, officia, repellendus repellat quod. Suscipit odit reiciendis expedita ratione consequuntur tempore nisi quo rem omnis cumque quidem cupiditate obcaecati, aspernatur vitae voluptas iusto, tenetur reprehenderit iste aut! Delectus ipsa, minus maiores totam sunt consequatur ducimus fugiat excepturi aut tenetur nesciunt, sapiente sint optio omnis exercitationem nobis aspernatur nulla fuga ea quia quaerat laborum aperiam. Vel, at possimus necessitatibus cum dolorem nisi fuga. Accusamus quas porro ducimus cum natus incidunt, ea quaerat voluptatum vitae modi assumenda aliquam delectus facere ipsam corporis veniam iste necessitatibus expedita perspiciatis, tempora laborum officia rerum. Nostrum blanditiis quae at accusamus, perspiciatis ratione laudantium, maxime rerum illo.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolore debitis earum consequuntur nihil distinctio reprehenderit voluptate est molestias, necessitatibus velit quisquam quibusdam sit similique, animi cum dolorum atque minus. Minima earum magnam est cupiditate dolor repudiandae porro provident quam sequi ipsa, reprehenderit distinctio atque quas corporis molestias. Eligendi iusto quo maxime hic esse nobis amet vero, earum quis ducimus a adipisci sequi consequatur qui, fugit est. Quae maiores repellendus accusantium necessitatibus vel nemo fuga qui quasi, magni adipisci hic laudantium nobis consectetur distinctio? At, aliquid ea! Illo cupiditate pariatur tenetur aut a, perferendis accusantium vitae libero sequi sed dicta ad quas voluptatem, excepturi quisquam voluptatibus laborum nulla molestias beatae assumenda! Velit doloremque error suscipit, labore ex cum ducimus quidem blanditiis animi reprehenderit, qui debitis a assumenda, voluptatum odit, repellat culpa repudiandae excepturi illo. Vitae aspernatur maiores cumque earum, ex harum consequuntur distinctio voluptatum! Quis dolorum consequuntur suscipit adipisci quae, officia, repellendus repellat quod. Suscipit odit reiciendis expedita ratione consequuntur tempore nisi quo rem omnis cumque quidem cupiditate obcaecati, aspernatur vitae voluptas iusto, tenetur reprehenderit iste aut! Delectus ipsa, minus maiores totam sunt consequatur ducimus fugiat excepturi aut tenetur nesciunt, sapiente sint optio omnis exercitationem nobis aspernatur nulla fuga ea quia quaerat laborum aperiam. Vel, at possimus necessitatibus cum dolorem nisi fuga. Accusamus quas porro ducimus cum natus incidunt, ea quaerat voluptatum vitae modi assumenda aliquam delectus facere ipsam corporis veniam iste necessitatibus expedita perspiciatis, tempora laborum officia rerum. Nostrum blanditiis quae at accusamus, perspiciatis ratione laudantium, maxime rerum illo.
        </p>

      </div>
    )
  }
}

let styles = {
  wrapper: {
    display: 'block',
    padding: '16px',
    float: 'left',
    marginLeft: '0px',

    '@media (min-width: 1054px)': {
      marginLeft: '300px',
    },
  },
  widgetContainer: {
    margin: '0 -8px',
  }
}

module.exports = Radium(Wrapper)
