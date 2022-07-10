interface ImageItem {
    id: number;
    type: "imageItem";
    title: string;
    imageUrl: string;
}

interface QuoteItem {
    id: number;
    type: "quoteItem";
    quote: string;
    name: string
}

export type Item = ImageItem | QuoteItem;

interface ComponentProps {
    items: Item[];
}

export default function Component({ items }: ComponentProps) {

    const { imageUrl } = items[0] as ImageItem
    console.log("itemsitemsitems", imageUrl);

    // const userA = this.props.user as UserA
    return (
        <ul>
            {items.map((item) => {
                if (item.type === "imageItem")
                    return (
                        <li key={item.id}>
                            {item.title && <p>{item.title}</p>}
                            {item.imageUrl && (
                                <img
                                    style={{ maxWidth: "15rem" }}
                                    src={item.imageUrl}
                                    alt={item.title}
                                />
                            )}
                        </li>
                    );

                return (
                    <li key={item.id}>
                        {item.quote && <p style={{ fontStyle: "italic" }}>{item.quote}</p>}
                    </li>
                );
            })}
        </ul>
    );
}
