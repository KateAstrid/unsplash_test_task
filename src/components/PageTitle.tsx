interface Title {
    title: string
}

const PageTitle = ({ title }: Title ) => {
    return (
        <div className="page__title">{ title }</div>
    )
}

export default PageTitle