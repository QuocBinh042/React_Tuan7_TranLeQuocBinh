import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Screen2({ navigation }) {
    // Danh sách sản phẩm
    const allProducts = {
        Smartphone: {
            bestSales: [
                { name: 'Smartphone 1', price: '$899', image: require('../assets/Data/1.png') },
                { name: 'Smartphone 2', price: '$899', image: require('../assets/Data/2.png') },
                { name: 'Smartphone 3', price: '$789', image: require('../assets/Data/3.png') },
                { name: 'Smartphone 4', price: '$999', image: require('../assets/Data/4.png') },
            ],
            bestMatched: [
                { name: 'Smartphone Matched 1', price: '$899', image: require('../assets/Data/1.png') },
                { name: 'Smartphone Matched 2', price: '$899', image: require('../assets/Data/2.png') },
            ],
            popular: [
                { name: 'Smartphone Popular 1', price: '$899', image: require('../assets/Data/3.png') },
                { name: 'Smartphone Popular 2', price: '$899', image: require('../assets/Data/4.png') },
            ]
        },
        Ipad: {
            bestSales: [
                { name: 'Ipad 1', price: '$999', image: require('../assets/Data/ipad.png') },
                { name: 'Ipad 2', price: '$1199', image: require('../assets/Data/ipad.png') },
            ],
            bestMatched: [
                { name: 'Ipad Matched 1', price: '$1099', image: require('../assets/Data/ipad.png') },
            ],
            popular: [
                { name: 'Ipad Popular 1', price: '$1299', image: require('../assets/Data/ipad.png') },
            ]
        },
        MacBook: {
            bestSales: [
                { name: 'MacBook 1', price: '$1499', image: require('../assets/Data/macbook.png') },
                { name: 'MacBook 2', price: '$1799', image: require('../assets/Data/macbook.png') },
            ],
            bestMatched: [
                { name: 'MacBook Matched 1', price: '$1599', image: require('../assets/Data/macbook.png') },
            ],
            popular: [
                { name: 'MacBook Popular 1', price: '$1999', image: require('../assets/Data/macbook.png') },
            ]
        }
    };
    const [selectedCategory, setSelectedCategory] = useState('Smartphone');
    const [selectedTab, setSelectedTab] = useState('bestSales');
    const [seeAll, setSeeAll] = useState(false);

    const products = allProducts[selectedCategory][selectedTab];
    const displayedProducts = seeAll ? products : products.slice(0, 4);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-left" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Electronics</Text>
                <Image
                    source={require('../assets/Data/icon.png')}
                    style={styles.avatar}
                />
            </View>

            <View style={styles.searchContainer}>
                <View style={styles.searchBox}>
                    <Icon name="search" size={20} color="gray" />
                    <Text style={styles.searchText}>Search</Text>
                </View>
                <TouchableOpacity>
                    <Icon name="filter" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <ScrollView>
                <View style={styles.categories}>
                    <Text style={styles.categoryTitle}>Categories</Text>
                    <TouchableOpacity>
                        <Text style={styles.seeAll}>See all</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.categoryIcons}>
                    <TouchableOpacity onPress={() => { setSelectedCategory('Smartphone'); setSelectedTab('bestSales'); setSeeAll(false); }}>
                        <Image source={require('../assets/Data/smart.png')} style={styles.categoryIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setSelectedCategory('Ipad'); setSelectedTab('bestSales'); setSeeAll(false); }}>
                        <Image source={require('../assets/Data/ipad.png')} style={styles.categoryIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setSelectedCategory('MacBook'); setSelectedTab('bestSales'); setSeeAll(false); }}>
                        <Image source={require('../assets/Data/macbook.png')} style={styles.categoryIcon} />
                    </TouchableOpacity>
                </View>

                <View style={styles.tabs}>
                    <TouchableOpacity onPress={() => setSelectedTab('bestSales')}>
                        <Text style={selectedTab === 'bestSales' ? styles.tabSelected : styles.tab}>Best Sales</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelectedTab('bestMatched')}>
                        <Text style={selectedTab === 'bestMatched' ? styles.tabSelected : styles.tab}>Best Matched</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelectedTab('popular')}>
                        <Text style={selectedTab === 'popular' ? styles.tabSelected : styles.tab}>Popular</Text>
                    </TouchableOpacity>
                </View>

                {displayedProducts.map((product, index) => (
                    <View key={index} style={styles.productContainer}>
                        <Image source={product.image} style={styles.productImage} />
                        <View style={styles.productInfo}>
                            <Text style={styles.productName}>{product.name}</Text>
                            <Text>⭐⭐⭐⭐⭐</Text>
                        </View>
                        <Text style={styles.productPrice}>{product.price}</Text>
                    </View>
                ))}

                <TouchableOpacity onPress={() => setSeeAll(!seeAll)}>
                    <Text style={{ color: 'dodgerblue', textAlign: 'center', padding: 10 }}>
                        {seeAll ? 'See less' : 'See all'}
                    </Text>
                </TouchableOpacity>

                <Image source={require('../assets/Data/banner.png')} style={styles.banner} />
            </ScrollView>

            <View style={styles.navBar}>
                <Icon name="home" size={24} color="dodgerblue" />
                <Icon name="search" size={24} color="gray" />
                <Icon name="heart" size={24} color="gray" />
                <Icon name="envelope" size={24} color="gray" />
                <Icon name="user" size={24} color="gray" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        marginBottom: 20,
    },
    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        flex: 1,
        marginRight: 10,
    },
    searchText: {
        marginLeft: 10,
        color: 'gray',
    },
    categories: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginBottom: 10,
    },
    categoryTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    seeAll: {
        color: 'dodgerblue',
    },
    categoryIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    categoryIcon: {
        width: 60,
        height: 60,
    },
    tabs: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    tabSelected: {
        color: 'dodgerblue',
        fontWeight: 'bold',
    },
    tab: {
        color: 'gray',
    },
    productContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    productImage: {
        width: 50,
        height: 50,
    },
    productInfo: {
        flex: 1,
        marginLeft: 10,
    },
    productName: {
        fontWeight: 'bold',
    },
    productPrice: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    seeAllButton: {
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: '#eee',
        marginVertical: 15,
    },
    seeAllText: {
        color: 'dodgerblue',
        fontWeight: 'bold',
    },
    banner: {
        width: '100%',
        height: 150,
        resizeMode: 'cover',
        marginTop: 20,
    },
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 15,
        borderTopWidth: 1,
        borderColor: '#eee',
    },
});
