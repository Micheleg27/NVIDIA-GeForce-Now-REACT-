import { INFORMAZIONI, RISORSE, SUPPORTO } from "./Data";

export const ListFooter = () => {
    return <div>
        <List Links={INFORMAZIONI} title="INFORMAZIONI" />
        <List Links={RISORSE} title="RISORSE" />
        <List Links={SUPPORTO} title="SUPPORTO" />
    </div>
}