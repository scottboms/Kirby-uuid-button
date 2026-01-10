panel.plugin("scottboms/uuid-button", {
	viewButtons: {
		"copy-page-uuid": {
			props: {
				value: String
			},
			template: `
				<k-button
					icon="copy"
					variant="filled"
					theme="yellow"
					size="sm"
					title="Copy page UUID link"
					@click="copy"
				>
					UUID
				</k-button>
			`,
			methods: {
				async copy() {
					const text = this.value || "";

					try {
						// modern clipboard api
						if (navigator.clipboard && navigator.clipboard.writeText) {
							await navigator.clipboard.writeText(text);
						} else {
							// fallback
							const el = document.createElement("textarea");
							el.value = text;
							el.setAttribute("readonly", "");
							el.style.position = "absolute";
							el.style.left = "-9999px";
							document.body.appendChild(el);
							el.select();
							document.execCommand("copy");
							document.body.removeChild(el);
						}

						// try panel notification (varies by version); fallback to alert
						const message = `Copied page UUID`;
						if (this.$panel?.notification?.success) {
							this.$panel.notification.success(message);
						} else if (this.$store?.dispatch) {
							// some panel builds expose notifications via the store
							try {
								this.$store.dispatch("notification/success", message);
							} catch (e) {
								alert(message);
							}
						} else {
							alert(message);
						}
					} catch (err) {
						const message = "Could not copy UUID";
						if (this.$panel?.notification?.error) {
							this.$panel.notification.error(message);
						} else {
							alert(message);
						}
					}
				},
			},
		},
	},
});
