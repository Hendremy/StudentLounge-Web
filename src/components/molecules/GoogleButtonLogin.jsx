import { GoogleLogin } from "@react-oauth/google";

export default function GoogleButtonLogin(props){
    const onSuccess = async (res) => {
        props.onTokenReceived(res.credential);
    }

    const onError = (err) => {
        console.log('failed:', err);
    };

    return(
       <GoogleLogin onSuccess={onSuccess} onError={onError} shape={'pill'}/> 
    );
}



//Ancien style
// <Button onClick={() => triggerOneTap()} style={googleStyle} fontSize={15}>
//             <GoogleIcon style={{margin:10}}/>
//             Continuer avec Google
// </Button>
//
// const googleStyle = {
//     backgroundColor:'white',
//     marginTop: 10,
//     color: palette.secondary,
//     borderRadius:10,
//     border: 0,
//     width: 280,
//     height: 35,
//     justifyContent:'flex-start'
// };