import {FC} from "react";
import styles from "./Home.module.scss";
import {HousesList} from "../../components/HousesList/HousesList";
import {useFetchHouses} from "../../hooks/useFetchHouses";
import {Loader} from "../../components/common/Loader/Loader";

export const Home: FC = () => {
    const {houses, isLoading, hasError} = useFetchHouses();

    return <div className={styles['container']}>

        {isLoading && <div className={styles['container__loader']}><Loader/></div>}

        {hasError && <span className={styles['container__error-text']}>
            Something went wrong, Please try again later!
        </span>
        }

        {!isLoading && houses?.length > 0 && <HousesList houses={houses}/>}
    </div>
}