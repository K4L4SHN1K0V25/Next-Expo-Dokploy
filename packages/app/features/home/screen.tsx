import { useEffect, useState } from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'
import client from 'app/api/client'

export function HomeScreen() {
  const [productos, setProductos] = useState([])

  useEffect(() => {
    client.get('/productos')
      .then(res => setProductos(res.data))
      .catch(err => console.error("Error cargando inventario", err))
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inventario POS</Text>
      
      <FlatList
        data={productos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View>
              <Text style={styles.prodName}>{item.nombre}</Text>
              <Text style={styles.prodCat}>{item.categoria}</Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={styles.prodPrice}>${item.precio.toFixed(2)}</Text>
              <Text style={styles.prodStock}>Stock: {item.stock}</Text>
            </View>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20, color: '#333' },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 3,
  },
  prodName: { fontSize: 18, fontWeight: '600' },
  prodCat: { color: '#666', fontSize: 14 },
  prodPrice: { fontSize: 18, fontWeight: '700', color: '#2ecc71' },
  prodStock: { fontSize: 12, color: '#999' }
})