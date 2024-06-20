import {Canister, query, text} from 'azle';
/*
import {canisterId} from "../../declarations/nft"
*/


export default Canister({
    greet: query([text], text, (name) => {
        console.log("canisterId")
        return `Hello, ${name}!`;
    })
})
