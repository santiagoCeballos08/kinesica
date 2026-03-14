<template>
	<Teleport to="body">
		<Transition name="modal">
			<div v-if="modelValue" class="modal__backdrop" @click.self="close" role="dialog" aria-modal="true">
				<div class="modal__panel">
					<!-- Orbe decorativo -->
					<div class="modal__orb" aria-hidden="true"></div>

					<!-- Header -->
					<div class="modal__header">
						<slot name="header" />
						<button class="modal__close" @click="close" aria-label="Cerrar">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
								<path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
							</svg>
						</button>
					</div>

					<!-- Content -->
					<div class="modal__body">
						<slot />
					</div>

					<!-- Footer -->
					<div class="modal__footer" v-if="$slots.footer">
						<slot name="footer" />
					</div>
				</div>
			</div>
		</Transition>
	</Teleport>
</template>

<script setup>
defineProps({
	modelValue: {
		type: Boolean,
		required: true,
	},
});

const emit = defineEmits(['update:modelValue']);

function close() {
	emit('update:modelValue', false);
}
</script>

<style scoped>
/* ── Backdrop ────────────────────────── */
.modal__backdrop {
	position: fixed;
	inset: 0;
	z-index: 9999;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 2rem;
	background: rgba(10, 10, 10, 0.65);
	backdrop-filter: blur(8px);
	-webkit-backdrop-filter: blur(8px);
}

/* ── Panel ───────────────────────────── */
.modal__panel {
	position: relative;
	width: 100%;
max-width: 60rem;
	height: max-content;
	max-height: 100vh;
	background: linear-gradient(
		145deg,
		var(--color-main-800) 0%,
		var(--color-main-950) 100%
	);
	border: 1px solid rgba(192, 231, 225, 0.15);
	border-radius: 2rem;
	padding: 3.2rem;
	color: #fff;
	box-shadow: 0 32px 80px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(192, 231, 225, 0.08);
overflow: hidden;
}

/* ── Orbe decorativo ─────────────────── */
.modal__orb {
	position: absolute;
	top: -6rem;
	right: -6rem;
	width: 22rem;
	height: 22rem;
	border-radius: 50%;
	background: radial-gradient(circle, rgba(192, 231, 225, 0.12) 0%, transparent 70%);
	pointer-events: none;
}

/* ── Header ──────────────────────────── */
.modal__header {
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	margin-bottom: 2rem;
	gap: 1.2rem;
}

/* ── Close button ────────────────────── */
.modal__close {
	flex-shrink: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 3.6rem;
	height: 3.6rem;
	border-radius: 50%;
	border: 1px solid rgba(192, 231, 225, 0.2);
	background: rgba(192, 231, 225, 0.06);
	color: rgba(192, 231, 225, 0.7);
	cursor: pointer;
	transition: background 0.2s, color 0.2s, border-color 0.2s;
}

.modal__close:hover {
	background: rgba(192, 231, 225, 0.15);
	color: #fff;
	border-color: rgba(192, 231, 225, 0.45);
}

.modal__close svg {
	width: 1.8rem;
	height: 1.8rem;
}

/* ── Body ────────────────────────────── */
.modal__body {
	font-size: 1.6rem;
	line-height: 1.7;
	color: rgba(255, 255, 255, 0.85);
}

/* ── Footer ──────────────────────────── */
.modal__footer {
	margin-top: 2.4rem;
	padding-top: 2rem;
	border-top: 1px solid rgba(192, 231, 225, 0.12);
}

/* ── Transitions ─────────────────────── */
.modal-enter-active,
.modal-leave-active {
	transition: opacity 0.25s ease;
}

.modal-enter-active .modal__panel,
.modal-leave-active .modal__panel {
	transition: opacity 0.25s ease, transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.modal-enter-from,
.modal-leave-to {
	opacity: 0;
}

.modal-enter-from .modal__panel {
	opacity: 0;
	transform: translateY(24px) scale(0.96);
}

.modal-leave-to .modal__panel {
	opacity: 0;
	transform: translateY(12px) scale(0.97);
}
</style>
