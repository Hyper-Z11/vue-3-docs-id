<script lang="ts">
const shuffleMembers = (
  members: Member[],
  pinTheFirstMember = false
): void => {
  let offset = pinTheFirstMember ? 1 : 0
  // `i` is between `1` and `length - offset`
  // `j` is between `0` and `length - offset - 1`
  // `offset + i - 1` is between `offset` and `length - 1`
  // `offset + j` is between `offset` and `length - 1`
  let i = members.length - offset
  while (i > 0) {
    const j = Math.floor(Math.random() * i)
    ;[members[offset + i - 1], members[offset + j]] = [
      members[offset + j],
      members[offset + i - 1]
    ]
    i--
  }
}
</script>

<script setup lang="ts">
import { VTLink } from '@vue/theme'
import membersCoreData from './members-core.json'
import membersEmeritiData from './members-emeriti.json'
import membersPartnerData from './members-partner.json'
import TeamHero from './TeamHero.vue'
import TeamList from './TeamList.vue'
import type { Member } from './Member'
shuffleMembers(membersCoreData as Member[], true)
shuffleMembers(membersEmeritiData as Member[])
shuffleMembers(membersPartnerData as Member[])
</script>

<template>
  <div class="TeamPage">
    <TeamHero>
      <template #title>Temui Team</template>
      <template #lead>
        Perkembangan Vue dan ekosistemnya dipandu oleh tim internasional, 
        beberapa di antaranya telah memilih untuk
        <span class="nowrap">ditampilkan di bawah ini.</span>
      </template>

      <template #action>
        <VTLink
          href="https://github.com/vuejs/governance/blob/master/Team-Charter.md"
        >
          Pelajari lebih lanjut tentang tim
        </VTLink>
      </template>
    </TeamHero>

    <TeamList :members="(membersCoreData as Member[])">
      <template #title>Anggota Tim Inti</template>
      <template #lead>
        Anggota tim inti adalah mereka yang secara aktif terlibat dalam pemeliharaan satu atau lebih proyek inti. 
        Mereka telah memberikan kontribusi signifikan pada ekosistem Vue, dengan komitmen jangka panjang terhadap keberhasilan proyek dan penggunanya.
      </template>
    </TeamList>

    <TeamList :members="(membersEmeritiData as Member[])">
      <template #title>Tim Inti Emeriti</template>
      <template #lead>
        Di sini kita menghormati beberapa anggota tim inti yang tidak lagi aktif yang telah memberikan kontribusi berharga di masa lalu.
      </template>
    </TeamList>

    <TeamList :members="(membersPartnerData as Member[])">
      <template #title>Mitra Komunitas</template>
      <template #lead>
        Beberapa anggota komunitas Vue telah memperkayanya, bahwa mereka pantas disebutkan secara khusus. 
        Kami telah mengembangkan hubungan yang lebih intim dengan mitra kunci ini, 
        sering berkoordinasi dengan mereka pada fitur dan berita yang akan datang.
      </template>
    </TeamList>
  </div>
</template>

<style scoped>
.TeamPage {
  padding-bottom: 16px;
}

@media (min-width: 768px) {
  .TeamPage {
    padding-bottom: 96px;
  }
}

.TeamList + .TeamList {
  padding-top: 64px;
}
</style>
