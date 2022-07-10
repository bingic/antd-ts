interface Props {
    headerText: string;
    extraText?: string;
}

const ChildrenNode = (props: Props) => {

    const { headerText, extraText = "default extraText" } = props

    return <h1>
        {headerText}
        {extraText && <p>{extraText}</p>}
    </h1>

}

export default function App() {
    const headerText = "This is a header", extraText = "some extra text"
    return <ChildrenNode headerText={headerText} extraText={extraText} />
}