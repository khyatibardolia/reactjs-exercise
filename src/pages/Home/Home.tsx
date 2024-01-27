import {FC} from "react";
import styles from "./Home.module.scss";
import {HousesList} from "../../components/HousesList/HousesList";
import {useFetchHouses} from "../../hooks/useFetchHouses";

export const Home: FC = () => {
    const {houses, isLoading, hasError} = useFetchHouses();

    return <div className={styles['container']}>

        {/*Todo: create a loader component*/}
        {isLoading && <span>Loading...</span>}

        {hasError && <span className={styles['container__error-text']}>
            Something went wrong, Please try again later!
        </span>
        }

        {!isLoading && houses?.length > 0 && <HousesList/>}
    </div>
}