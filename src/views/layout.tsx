interface LayoutProps {
    children?: any;
}

export function Layout(props: LayoutProps) {
    return (<div class="container-lg">{props.children}</div>)
}