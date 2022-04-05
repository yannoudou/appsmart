import { Container } from "react-bootstrap";
import { FiAlertTriangle } from "react-icons/fi";
import { ContainError } from "./Error.styled";

function Error() {
    return (
        <main>
            <Container fluid='xxl' >
                <ContainError>
                    <div>
                        <div>
                            <FiAlertTriangle />
                        </div>
                        <h1>Hey,</h1>
                        <h2>If you are here, it means:</h2>
                        <p>- The page you are looking for does not exist.</p>
                        <p>- Or an error has just occurred in the applications</p>
                    </div>
                </ContainError>
            </Container>
        </main>
    )
}

export default Error;