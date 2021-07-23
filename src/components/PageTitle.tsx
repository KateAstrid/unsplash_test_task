interface Title {
    title: string
}

const PageTitle = ({ title }: Title ) => {
    return (
        <div className="pageTitle">{ title }</div>
    )
}

export default PageTitle