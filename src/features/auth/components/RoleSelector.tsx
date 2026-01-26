type Role = "client" | "master"

export function RoleSelector({
                                 value,
                                 onChange,
                             }: {
    value: Role
    onChange: (role: Role) => void
}) {
    return (
        <div className="flex gap-3">
            {(["client", "master"] as Role[]).map(role => {
                const active = value === role

                return (
                    <button
                        key={role}
                        type="button"
                        onClick={() => onChange(role)}
                        className={`
              flex-1 h-[48px] rounded-[14px] border
              transition
              ${
                            active
                                ? "border-[rgb(var(--accent))] bg-[rgb(var(--accent)/0.08)]"
                                : "border-[rgb(var(--border))]"
                        }
            `}
                    >
                        {role === "client" ? "Клиент" : "Мастер"}
                    </button>
                )
            })}
        </div>
    )
}
