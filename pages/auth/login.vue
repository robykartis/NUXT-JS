<template>
    <div class="d-flex justify-content-center align-items-center" style="height: 70vh;">
        <div class="card col-3">
            <div class="card-header">
                <h4>Masuk</h4>
            </div>
            <form @submit.prevent="login">
                <div class="card-body">

                    <div class="mb-3">
                        <label class="form-label">Alamat Email</label>
                        <input type="email" class="form-control" aria-describedby="emailHelp"
                            placeholder="Masukan Email Yang Anda Daftarkan">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Kata Sandi</label>
                        <input type="password" class="form-control">
                    </div>
                    <div class="mb-3">
                        <NuxtLink to="/auth/register"><span>Belum mempunyai akun ?</span></NuxtLink>
                    </div>
                </div>
                <div class="card-footer">
                    <button type="submit" class="btn btn-dark">Masuk</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'authLogin'

}
</script>

<style lang="scss" scoped></style>