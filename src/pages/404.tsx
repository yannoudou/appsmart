
import ErrorComponent from "@components/Common/Error"


/**
 * 
 * ****NOTE*****
 * 
 * We can catch the error here,
 * Normaly depending of the error type we will may want to show a different component 
 * But for the test purpose , i will just show the same Error components 
 * for every different type of errors
 * @returns 
 */

function Error() {
    return <ErrorComponent />
}

export default Error