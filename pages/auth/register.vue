<template>
    <div class="d-flex justify-content-center align-items-center" style="height: 70vh;">
        <div class="card col-3">
            <div class="card-header">
                <h4>Daftar</h4>
            </div>
            <form action="">
                <div class="card-body">

                    <div class="mb-3">
                        <label class="form-label">Nama Lengkap</label>
                        <input type="text" class="form-control" aria-describedby="emailHelp"
                            placeholder="Masukan Nama Lengkap Anda">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Alamat Email</label>
                        <input type="email" class="form-control" aria-describedby="emailHelp"
                            placeholder="Masukan Alamat Email Yang Aktif">

                    </div>

                    <div class="mb-3">
                        <label class="form-label">Kata Sandi</label>
                        <input type="password" class="form-control">
                    </div>
                    <div class="mb-3">
                        <NuxtLink to="/auth/login"><span>Sudah mempunyai akun ?</span></NuxtLink>
                    </div>

                </div>
                <div class="card-footer">
                    <button type="submit" class="btn btn-dark">Daftar</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'authRegister'
}
</script>

<style lang="scss" scoped></style>