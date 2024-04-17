/* eslint-disable react/prop-types */
export function TypographySmall({ children }) {
    return (
        <small className="text-sm font-medium leading-none">{children}</small>
    );
}

export function TypographyMuted({ children }) {
    return (
        <p className="text-sm text-muted-foreground">{children}</p>
    );
}

export function TypographyLarge({ children }) {
    return <div className="text-lg font-semibold">{children}</div>;
}

export function TypographyLead({ children }) {
    return (
        <p className="text-xl text-muted-foreground">{children}</p>
    );
}

export function TypographyInlineCode({ children }) {
    return (
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
            {children}
        </code>
    );
}

export function TypographyList({ items }) {
    return (
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}

export function TypographyTable({ rows }) {
    return (
        <div className="my-6 w-full overflow-y-auto">
            <table className="w-full">
                <thead>
                    <tr className="m-0 border-t p-0 even:bg-muted">
                        <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                            {rows[0].header1}
                        </th>
                        <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                            {rows[0].header2}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {rows.slice(1).map((row, index) => (
                        <tr key={index} className="m-0 border-t p-0 even:bg-muted">
                            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                                {row.column1}
                            </td>
                            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                                {row.column2}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export function TypographyBlockquote({ children }) {
    return (
        <blockquote className="mt-6 border-l-2 pl-6 italic">
            {children}
        </blockquote>
    );
}

export function TypographyP({ children }) {
    return (
        <p className="leading-7 [&:not(:first-child)]:mt-6">
            {children}
        </p>
    );
}

export function TypographyH7({ children, className = '' }) {
    return (
        <h7 className={`scroll-m-20 text-sm font-normal tracking-tight ${className}`}>
            {children}
        </h7>
    );
}

export function TypographyH6({ children, className = '' }) {
    return (
        <h6 className={`scroll-m-20 text-base font-medium tracking-tight ${className}`}>
            {children}
        </h6>
    );
}

export function TypographyH5({ children, className = '' }) {
    return (
        <h5 className={`scroll-m-20 text-lg font-semibold tracking-tight ${className}`}>
            {children}
        </h5>
    );
}

export function TypographyH4({ children }) {
    return (
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            {children}
        </h4>
    );
}

export function TypographyH3({ children }) {
    return (
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            {children}
        </h3>
    );
}

export function TypographyH2({ children }) {
    return (
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            {children}
        </h2>
    );
}

export function TypographyH1({ children }) {
    return (
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {children}
        </h1>
    );
}
