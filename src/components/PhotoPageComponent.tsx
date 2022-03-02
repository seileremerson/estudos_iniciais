import { Photo } from '../types/Photo'

type Props = {
    data: Photo
}


export const PhotoPageComponent = ({data}: Props) => {
    return(
        <>
            <div className='py-3'>
                {data.title}
            </div>
            <img src={data.url} alt="" />
        </>
    )
}