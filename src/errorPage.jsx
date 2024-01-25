import { useRouteError } from 'react-router-dom';
export default function ErrorPage(){
    const error = useRouteError();
    console.error(error);

    return(
        <div id='error-page'>
            <h1>Ta malo!</h1>
            <p>Ta malo el link, prueba otro</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}