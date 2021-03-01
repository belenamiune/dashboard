<template>
  <base-table :data="tableData" thead-classes="text-primary">
    <template slot-scope="{ row }">
      <td><base-checkbox v-model="row.done"></base-checkbox></td>
      <td>
        <p class="title">{{ row.title }}</p>
        <p class="text-muted">{{ row.description }}</p>
      </td>
      <td class="td-actions text-right">
        <el-tooltip
          content="Editar tarea"
          effect="light"
          :open-delay="300"
          placement="top"
        >
          <base-button type="link">
            <i class="tim-icons icon-pencil"></i>
          </base-button>
        </el-tooltip>
      </td>
    </template>
  </base-table>
</template>
<script>
import { BaseTable } from '@/components';

export default {
  components: {
    BaseTable
  },
  data() {
    return {
      tableData: [
        {
          title: 'Confirmar reservas',
          description: '5 Reservas pendientes de confirmación',
          done: false
        },
        {
          title: 'Realizar pedido semanal',
          description:
            'Última posibilidad de carga dentro de 6 días.',
          done: true
        },
        {
          title: 'Revisar estado de heladeras',
          description:
            'Heladera número 02 posible falla de motor',
          done: false
        },
        {
          title: 'Reunión Marketing',
          description: '10/04/2021 reunión genercial para definir estrategias de marketing',
          done: false
        },
        {
          title: 'Entrevistar a 5 candidatos',
          description:
            '12/04/2021 9:00 hs entrevista candidatos. Puesto: mesero/mesera',
          done: false
        },
      ]
    };
  }
};
</script>
<style></style>
