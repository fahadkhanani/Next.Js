"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCartStore } from "../../../store/cart-store";
import { Button } from "@/components/ui/button";
import { checkoutAction } from "./checkout-action";

export default function CheckoutPage(){

    const {items, removeItem, addItem, clearCart} = useCartStore();
    const total = items.reduce(
        (acc , item) => acc + item.price * item.quantity, 0
    );
    if(total === 0 || items.length === 0){
        return(
            <div className="container mx-auto px-4 py-8 text-center">
                <h1 className="text-3xl font-bold mb-4">Your cart is empty </h1>
            </div>
        );
    }
    return(
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Checkout</h1>
            <Card className="max-w-md mx-auto mb-8">
                <CardHeader>
                    <CardTitle className="text-xl font-bold">Order Summary</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-4">
                        {items.map((item, key) => (
                            <li key={key}
                            className="flex flex-col gap-2 border-b pb-2">
                                <div className="flex justify-between">
                                    <span className="font-medium">{item.name}</span>
                                    {/* <span>Quantity: {item.quantity}</span> */}
                                    <span className="font-semibold">Price: ${(item.price * item.quantity) / 100}</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <Button variant={"outline"} onClick={() => removeItem(item.id)}> - </Button>
                                    <span className="text-lg font-semibold">{item.quantity}</span>
                                    <Button variant={"outline"} className="bg-black text-white" onClick={() => addItem({...item, quantity: 1})}> + </Button>
                                    <br />
                                    {/* <Button onClick={clearCart}>Clear Cart</Button> */}
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4 border-t text-lg font-semibold">
                        Total: ${(total/100)}
                    </div>
                </CardContent>
            </Card>
            <form action={checkoutAction}
            className="max-w-md mx-auto">
                <input type="hidden" name="items" value={JSON.stringify(items)} />
                <Button variant={"default"}>Proceed to Payment</Button>
            </form>
        </div>
    );
}