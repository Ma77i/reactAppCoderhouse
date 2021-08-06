import {useState} from "react"
import {Button, Container} from 'react-bootstrap';
const ItemCount = ({ stock , initial , onAdd }) => {

    const [contador,setContador] = useState(initial)

    const aumentarContador = () => {
        if(contador < stock){
            setContador(contador + 1)
        }
    }

    const restarContador = () => {
        if(contador > initial){
            setContador(contador - 1)
        }
    }

    const confirmar = () => {
        if(stock > 0){
            onAdd(contador)
        }
    }

    return (
        <>
            <Container>
                <Button variant="dark" className="m-3" onClick={restarContador}> - </Button>
                <Button variant="secondary" className="m-3" onClick={restarContador}>Cantidad: {contador}</Button>
                <Button variant="dark" className="m-3" onClick={aumentarContador}> + </Button>
                <Button variant="dark" className="m-3" onClick={confirmar}> Confirmar </Button>
            </Container>
        </>
    )

}

export default ItemCount