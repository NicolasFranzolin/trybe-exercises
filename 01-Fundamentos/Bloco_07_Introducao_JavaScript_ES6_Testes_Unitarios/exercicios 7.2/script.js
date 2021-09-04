

const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    const name = order.name;
    const deliveryPerson = order.order.delivery.deliveryPerson;
    const phone = order.phoneNumber;
    const address = order.address.street;
    const addressNumber = order.address.number;
    const addressAp = order.address.apartment;

    console.log(`Olá ${deliveryPerson}, entrega para: ${name}, Telefone: ${phone}, R. ${address}, Nº ${addressNumber}, AP: ${addressAp}`)
  
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    const novoComprador = order.name = 'Luiz Silva';
    const pizzas = Object.keys(order.order.pizza);
    const drinks = order.order.drinks.coke.type;
    const novoTotal = order.payment.total = '50';


    console.log(`Olá ${novoComprador}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drinks} é R$ ${novoTotal},00.`);
  
  }
  
  orderModifier(order);