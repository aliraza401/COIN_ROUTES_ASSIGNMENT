import ContentLoader from "react-content-loader"


export const MarketPageLoader = () => {
    return <>
        <div className="w-full overflow-hidden">
            <HeaderLoader />
            <ChartLoader />
        </div>
    </>
}

export const HeaderLoader = () => {
    return <ContentLoader height="100" width="3000" viewBox="0 0 3000 100">
        <rect x="0" y="15" rx="4" ry="4" width="3000" height="60" />
    </ContentLoader>
}

export const ChartLoader = () => {
    return <ContentLoader height="370" width="3000" viewBox="0 0 3000 370">
        <rect x="0" y="0" rx="2" ry="2" width="3000" height="320" />
    </ContentLoader>
}
