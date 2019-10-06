import React from 'react';
import styled from 'styled-components';
import { ConfirmButton, DialogContent } from '../FoodDialog/FoodDialog';
import { DialogFooter as OrderFooter } from '../FoodDialog/FoodDialog';

const OrderStyled = styled.div`
    position: fixed;
    right: 0px;
    top: 48px;
    width: 340px;
    background-color: white;
    height: calc(100% - 48px);
    box-shadow: 4px 0px 5px 4px grey;
    z-index: 10;
    display: flex;
    flex-direction: column;
`;

const OrderContent = styled(DialogContent)`
    padding: 20px;
    height: 100%;
`;

const OrderContainer = styled.div`
    padding: 10px 0px;
    border-bottom: 1px solid grey;
`;

const OrderItem = styled.div`
    padding: 10px 0px;
`;

const Order = props => {
    const { orders } = props;

    return (
        <OrderStyled>
            {orders.length === 0 ? (
                <OrderContent>
                    Your order is looking pretty empty...
                </OrderContent>
            ) : (
                <OrderContent>
                    <OrderContainer>Your Order:</OrderContainer>{' '}
                    {orders.map(order => (
                        <OrderContainer>
                            <OrderItem>{order.name}</OrderItem>
                        </OrderContainer>
                    ))}
                </OrderContent>
            )}
            <OrderFooter>
                <ConfirmButton>Checkout</ConfirmButton>
            </OrderFooter>
        </OrderStyled>
    );
};

export default Order;